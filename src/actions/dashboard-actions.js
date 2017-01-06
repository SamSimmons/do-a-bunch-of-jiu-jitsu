export const SET_WHOLE_HOURS = "SET_WHOLE_HOURS"
export function setWholeHours(val) {
  return {
    type: SET_WHOLE_HOURS,
    val
  }
}

export const SET_PARTIAL_HOURS = "SET_PARTIAL_HOURS"
export function setPartialHours(val) {
  return {
    type: SET_PARTIAL_HOURS,
    val
  }
}

export const INCREMENT_WHOLE_HOURS = "INCREMENT_WHOLE_HOURS"
export function incrementWholeHours() {
  return {
    type: INCREMENT_WHOLE_HOURS
  }
}

export const DECREMENT_WHOLE_HOURS = "DECREMENT_WHOLE_HOURS"
export function decrementWholeHours() {
  return {
    type: DECREMENT_WHOLE_HOURS
  }
}

export const INCREMENT_PARTIAL_HOURS = "INCREMENT_PARTIAL_HOURS"
export function incrementPartialHours() {
  return {
    type: INCREMENT_PARTIAL_HOURS
  }
}

export const DECREMENT_PARTIAL_HOURS = "DECREMENT_PARTIAL_HOURS"
export function decrementPartialHours() {
  return {
    type: DECREMENT_PARTIAL_HOURS
  }
}

export const SET_DATE = "SET_DATE"
export function setDate(date) {
  return {
    type: SET_DATE,
    date
  }
}

export const SUBMIT_NEW_HOURS = "SUBMIT_NEW_HOURS"
export function submitNewHours(hours) {
  return {
    type: SUBMIT_NEW_HOURS,
    hours
  }
}

export const UPDATE_HOURS = "UPDATE_HOURS"
export function updateHours(nextUserData) {
  return {
    type: UPDATE_HOURS,
    nextUserData
  }
}
