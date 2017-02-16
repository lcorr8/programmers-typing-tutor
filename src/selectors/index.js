import { values } from 'ramda'

export const getTraining = (state, props) => {
  const {
    mode,
    level
  } = props.params

  const {
    bySlug,
    byId
  } = state.entitites.trainings

  const slug = `${mode}/${level}`
  const id = bySlug[slug]
  return byId[id]
}

export const getLessonById = (state, id) => {
  return state.entitites.lessons.byId[id]
}

export const getLessons = (state, props) => {
  return values(state.entitites.lessons.byId)
}

export const getTrainings = (state, props) => {
  return values(state.entitites.trainings.byId)
}

export const getTrainingForm = (state, props) => {
  return state.ui.trainingForm
}

