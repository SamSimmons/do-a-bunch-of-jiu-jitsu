import moment from 'moment'
import {
  SET_WHOLE_HOURS,
  INCREMENT_WHOLE_HOURS,
  DECREMENT_WHOLE_HOURS,
  INCREMENT_PARTIAL_HOURS,
  DECREMENT_PARTIAL_HOURS,
  SET_DATE,
} from '../actions/dashboard-actions'

const defaultState = {
  wholeHours: 0,
  partialHours: 5,
  date: moment()
}

export default function(state = defaultState, action) {
  switch(action.type) {
    case SET_WHOLE_HOURS: {
      return {
        ...state,
        wholeHours: action.val
      }
    }
    case INCREMENT_WHOLE_HOURS: {
      return {
        ...state,
        wholeHours: state.wholeHours += 1
      }
    }
    case DECREMENT_WHOLE_HOURS: {
      if (state.wholeHours < 1) {
        return state
      }
      return {
        ...state,
        wholeHours: state.wholeHours -= 1
      }
    }
    case INCREMENT_PARTIAL_HOURS: {
      if (state.partialHours === 5) {
        return {
          ...state,
          partialHours: 0,
          wholeHours: state.wholeHours += 1
        }
      }
      return {
        ...state,
        partialHours: 5
      }
    }
    case DECREMENT_PARTIAL_HOURS: {
      if (state.wholeHours < 1) {
        return state
      }
      if (state.partialHours === 0) {
        return {
          ...state,
          partialHours: 5,
          wholeHours: state.wholeHours -= 1
        }
      }
      return {
        ...state,
        partialHours: 0
      }
    }
    case SET_DATE: {
      return {
        ...state,
        date: action.date
      }
    }
    default: return state
  }
}
