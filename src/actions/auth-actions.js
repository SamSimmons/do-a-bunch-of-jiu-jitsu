export const USER_LOG_IN = "USER_LOG_IN"
export function logIn() {
  return {
    type: USER_LOG_IN
  }
}

export const USER_LOG_OUT = "USER_LOG_OUT"
export function logOut() {
  return {
    type: USER_LOG_OUT
  }
}
