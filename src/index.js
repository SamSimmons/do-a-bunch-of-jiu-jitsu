import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/index'
import './index.scss'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { watchForUserRequest } from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(watchForUserRequest)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
