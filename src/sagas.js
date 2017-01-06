import { put, take, fork } from 'redux-saga/effects'
import axios from 'axios'
import {
  REQUEST_USER_DATA,
  USER_DATA_AVAILABLE,
  USER_LOGIN
} from './actions/auth-actions'
import {
  SUBMIT_NEW_HOURS,
  updateHours
} from './actions/dashboard-actions'

const fetchUserInfo = (token) => {
  const config = {
    headers: { "Authorization": "Bearer " + token}
  }
  return axios('/user', config)
    .then(res => res.data)
}

export function* watchForUserRequest() {
  while(true) {
    const action = yield take(REQUEST_USER_DATA)
    const token = action.token
    const userData = yield fetchUserInfo(token)
    yield put({type: USER_DATA_AVAILABLE, userData})
  }
}

const sendNextHours = (hours) => {
  const config = {
    // headers: { "Authorization": "Bearer " + action.token},
    method: 'post',
    data: {
      hours
    },
    url: '/add-time'
  }
  return axios(config)
    .then(res => res.data)
}

export function* watchForHoursUpdate() {
  while (true) {
    const action = yield take(SUBMIT_NEW_HOURS)
    const nextUserData = yield sendNextHours(action.hours)
    yield put(updateHours(nextUserData))
  }
}

export function* watchForLogin() {
  while (true) {
    const action = yield take(USER_LOGIN)
    console.log("user has logged in", action)
  }
}
