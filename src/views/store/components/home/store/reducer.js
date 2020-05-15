import * as actionTypes from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  showFlapCard: false,
  random: null,
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_SHOW_FLAP_CARD:
      return state.set('showFlapCard', action.data)
    case actionTypes.CHANGE_RANDOM:
      return state.set('random', action.data)
    default:
      return state
  }
}