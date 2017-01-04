import {
  USER_LOG_IN
} from '../actions/auth-actions'

export default function(state = {loggedIn: false}, action) {
  switch (action.type) {
    case USER_LOG_IN: {
      return {
        ...state,
        loggedIn: true
      }
    }
    default: return state
  }
}
