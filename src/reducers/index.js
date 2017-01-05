import { combineReducers } from 'redux'
import addTime from './add-time'
import auth from './auth'
import hours from './hours'

export default combineReducers({
  addTime,
  auth,
  hours
})
