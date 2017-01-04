import { combineReducers } from 'redux'
import addTime from './add-time'
import auth from './auth'

export default combineReducers({
  addTime,
  auth
})
