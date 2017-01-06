import {
  USER_DATA_AVAILABLE
} from '../actions/auth-actions'

import {
  UPDATE_HOURS
} from '../actions/dashboard-actions'

export default function(state = {}, action) {
  switch (action.type) {
    case USER_DATA_AVAILABLE: {
      const { hoursLeft, hoursComplete, hoursGoal } = action.userData
      return {
        ...state,
        hoursLeft: parseFloat(hoursLeft),
        hoursComplete: parseFloat(hoursComplete),
        hoursGoal: parseFloat(hoursGoal)
      }
    }
    case UPDATE_HOURS: {
      const { hoursLeft,hoursComplete, hoursGoal } = action.nextUserData
      return {
        ...state,
        hoursLeft: parseFloat(hoursLeft),
        hoursComplete: parseFloat(hoursComplete),
        hoursGoal: parseFloat(hoursGoal)
      }
    }
    default: return state
  }
}
