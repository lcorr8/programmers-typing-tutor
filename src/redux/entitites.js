import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'
import {
  COMPLETE_LESSON,
  UPDATE_EDITOR_CODE,
  INCREMENT_MISTAKES,
  SET_ENTITIES,
  START_TRAINING
  // COMPLETE_TRAINING
} from '../constants'
import { append } from 'ramda'

export default combineReducers({
  trainings: combineReducers({
    byId: handleActions({
      [COMPLETE_LESSON]: (state, action) => {
        const training = state[action.payload.trainingId]
        // console.log('action.payload', action.payload)
        return {
          ...state,
          [action.payload.trainingId]: {
            ...training,
            lessonsCompleted: append(action.payload.lessonId, training.lessonsCompleted)
          }
        }
      },
      [SET_ENTITIES]: (state, action) => {
        if (action.payload.trainings) {
          return {
            ...state,
            ...action.payload.trainings.byId
          }
        }
        return state
      }
    }, {}),
    bySlug: handleActions({
      [SET_ENTITIES]: (state, action) => {
        if (action.payload.trainings) {
          return {
            ...state,
            ...action.payload.trainings.bySlug
          }
        }
        return state
      }
    }, {})
  }),
  lessons: combineReducers({
    byId: handleActions({
      [COMPLETE_LESSON]: (state, action) => {
        const lesson = state[action.payload.lessonId]
        return {
          ...state,
          [action.payload.lessonId]: {
            ...lesson,
            elapsedTime: Date.now() - lesson.statedAt,
            finishedAt: Date.now()
          }
        }
      },
      [INCREMENT_MISTAKES]: (state, action) => {
        return {
          ...state,
          [action.payload.lessonId]: {
            ...state[action.payload.lessonId],
            mistakes: state[action.payload.lessonId].mistakes + 1
          }
        }
      },
      [UPDATE_EDITOR_CODE]: (state, action) => {
        const lesson = state[action.payload.lessonId]
        return {
          ...state,
          [action.payload.lessonId]: {
            ...lesson,
            editor: action.payload.code,
            keystrokes: lesson.keystrokes + 1
          }
        }
      },
      [START_TRAINING]: (state, action) => {
        const lesson = state[action.payload.lessonId]
        return {
          ...state,
          [action.payload.lessonId]: {
            ...lesson,
            statedAt: Date.now()
          }
        }
      },
      [SET_ENTITIES]: (state, action) => {
        if (action.payload.lessons) {
          return {
            ...state,
            ...action.payload.lessons.byId
          }
        }
        return state
      }
    }, {}),
    bySlug: handleActions({
      [SET_ENTITIES]: (state, action) => {
        if (action.payload.lessons) {
          return {
            ...state,
            ...action.payload.lessons.bySlug
          }
        }
        return state
      }
    }, {})
  })
})

