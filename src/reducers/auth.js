import {
  USER_LOG_IN,
  USER_LOG_OUT,
} from '../actions/auth-actions'

export default function(state = {loggedIn: false}, action) {
  switch (action.type) {
    case USER_LOG_IN: {
      return {
        ...state,
        loggedIn: true
      }
    }
    case USER_LOG_OUT: {
      return {
        ...state,
        loggedIn: false
      }
    }
    default: return state
  }
}
