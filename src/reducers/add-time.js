import moment from 'moment'
import { SET_WHOLE_HOURS } from '../actions'

const defaultState = {
  wholeHours: 0,
  partialHours: 5,
  date: moment()
}

export default function(state = defaultState, action) {
  switch(action.type) {
    case "TEST": {
      console.log("TEST PASSED")
      return state
    }
    case SET_WHOLE_HOURS: {
      return {
        ...state,
        wholeHours: action.val
      }
    }
    default: return state
  }
}
