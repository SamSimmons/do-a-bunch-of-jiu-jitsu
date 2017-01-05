import { put, take, fork } from 'redux-saga/effects'
import axios from 'axios'
import {
  REQUEST_USER_DATA,
  USER_DATA_AVAILABLE
} from './actions/auth-actions'

const fetchUserInfo = (token) => {
  const config = {
    headers: { "Authorization": "Bearer " + token}
  }
  return axios('/user', config)
    .then(res => res.data)
}

export function* watchForUserRequest(token) {
  while(true) {
    const action = yield take(REQUEST_USER_DATA)
    const token = action.token
    const userData = yield fetchUserInfo(token)
    yield put({type: USER_DATA_AVAILABLE, userData})
  }
}
