import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  autoRehydrate,
  persistStore
} from 'redux-persist'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import * as services from '../services'

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        thunk.withExtraArgument(services)
      ),
      autoRehydrate()
    )
  )

  // begin periodically persisting the store
  persistStore(store, {
    blacklist: ['routing']
  })

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
