import pluck from 'ramda/src/pluck'

import {
  CREATE_TRAINING,
  CREATE_TRAINING_SUCCESS,
  CREATE_TRAINING_FAILED,
  UPDATE_TRAINING_FORM,
  SET_ENTITIES,
  INCREMENT_MISTAKES,
  COMPLETE_LESSON,
  FETCH_TRAINIG,
  FETCH_TRAINIG_SUCCESS,
  FETCH_TRAINIG_FAILED,
  UPDATE_EDITOR_CODE,
  COMPLETE_TRAINING,
  START_TRAINING
} from '../constants'

export function updateEditorCode (lessonId, code) {
  return (dispatch, getState, services) => {
    const { statedAt, example, trainingId } = getState().entitites.lessons.byId[lessonId]
    const training = getState().entitites.trainings.byId[trainingId]

    if (!statedAt) {
      dispatch({ type: START_TRAINING, payload: { lessonId, trainingId } })
    }

    dispatch({ type: UPDATE_EDITOR_CODE, payload: { lessonId, code } })

    if (!example.startsWith(code)) {
      dispatch({ type: INCREMENT_MISTAKES, payload: { lessonId } })
    }

    if (example === code) {
      dispatch({ type: COMPLETE_LESSON, payload: { lessonId, trainingId } })

      if (training.lessons.length - 1 === training.lessonsCompleted.length) {
        dispatch({ type: COMPLETE_TRAINING, payload: { lessonId, trainingId } })
      }
    }
  }
}

export function fetchTraining (mode, level) {
  return (dispatch, getState, services) => {
    dispatch({ type: FETCH_TRAINIG, payload: { mode, level } })

    services.training.fetch(mode, level).then(
      training => {
        dispatch({ type: SET_ENTITIES, payload: getTrainingEntities(training) })
        dispatch({ type: FETCH_TRAINIG_SUCCESS, payload: training })
      },
      error => {
        dispatch({ type: FETCH_TRAINIG_FAILED, error: true, payload: error.message })
      }
    )
  }
}

/**
 * Нормализует объект training к виду entities.
 *
 * @param  {Object} training Данные training.
 *
 * @return {Object}          Возвращает объект entities: { ... }
 */
function getTrainingEntities (training) {
  const {
    id,
    name,
    mode,
    level,
    logo
  } = training

  const lessons = training.lessons.map((lesson, i) => {
    lesson.id = 'lesson' + i
    return lesson
  })

  const trainingSlug = `${mode}/${level}`

  return {
    trainings: {
      byId: {
        [id]: {
          id,
          name,
          slug: trainingSlug,
          mode,
          level,
          logo,
          lessons: pluck('id', lessons),
          lessonsCompleted: []
        }
      },
      bySlug: {
        [trainingSlug]: id
      }
    },
    lessons: lessons.reduce((lessons, lesson) => {
      const lessonSlug = `${trainingSlug}/${lesson.id}`
      lessons.byId[lesson.id] = {
        id: lesson.id,
        slug: lessonSlug,
        editor: '',
        example: lesson.example,
        exercise: lesson.exercise,
        trainingId: id,
        finishedAt: null,
        statedAt: null,
        keystrokes: 0,
        mistakes: 0
      }
      lessons.bySlug[lessonSlug] = lesson.id
      return lessons
    }, { byId: {}, bySlug: {} })
  }
}

export function createTraining ({ name, mode, level, lessons }) {
  return (dispatch, getState, services) => {
    dispatch({ type: CREATE_TRAINING, payload: { name, mode, level, lessons } })

    services.training.create({ name, mode, level, lessons }).then(
      training => {
        dispatch({ type: SET_ENTITIES, payload: getTrainingEntities(training) })
        dispatch({ type: CREATE_TRAINING_SUCCESS, payload: training })
      },
      error => {
        dispatch({ type: CREATE_TRAINING_FAILED, error: true, payload: error.message })
      }
    )
  }
}

export function updateTrainingForm ({ name, mode, level, lessons }) {
  return (dispatch, getState, services) => {
    dispatch({ type: UPDATE_TRAINING_FORM, payload: { name, mode, level, lessons } })
  }
}

// export function restartTraining (trainingId) {
//   return (dispatch, getState, services) => {
//     dispatch({ type: RESTART_TRAINING, payload: { trainingId } })
//   }
// }
