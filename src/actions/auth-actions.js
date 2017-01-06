export const USER_LOGIN = "USER_LOGIN"
export function userLogin(user) {
  return {
    type: USER_LOGIN,
    user
  }
}

export const USER_LOG_OUT = "USER_LOG_OUT"
export function logOut() {
  return {
    type: USER_LOG_OUT
  }
}

export const REQUEST_USER_DATA = "REQUEST_USER_DATA"
export function getUserData(token) {
  return {
    type: REQUEST_USER_DATA,
    token
  }
}

export const USER_DATA_AVAILABLE = "USER_DATA_AVAILABLE"
export function userDataReturned() {
  return {
    type: USER_DATA_AVAILABLE
  }
}
