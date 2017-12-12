import { compose, createStore, applyMiddleware } from 'redux'
import persistState from 'redux-localstorage'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from 'reducers/index'

export function buildStore() {
  const logger = createLogger()
  const enhancer = compose(persistState('auth'))
  const middlewares = process.env.NODE_ENV === 'development' ? applyMiddleware(thunk, logger) : applyMiddleware(thunk)
  return createStore(reducers, middlewares, enhancer)
}

export default {
  buildStore,
}