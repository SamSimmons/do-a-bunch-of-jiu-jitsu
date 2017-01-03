export const TEST = "TEST"
export function testRedux() {
  return {
    type: TEST
  }
}

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
