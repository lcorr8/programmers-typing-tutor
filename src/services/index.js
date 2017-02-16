import { fetchJson } from '../utils'
import {
  CODE_MIRROR_MODES,
  TRAINING_LEVELS
} from '../constants'

export const training = {
  fetch (mode, level) {
    if (CODE_MIRROR_MODES.indexOf(mode) === -1) {
      throw new Error('Unknown Codemirror mode: ' + mode)
    }
    if (TRAINING_LEVELS.indexOf(level) === -1) {
      throw new Error('Unknown Training level: ' + level)
    }

    return fetchJson(`/training/${mode}/${level}.json`)
  }
}
