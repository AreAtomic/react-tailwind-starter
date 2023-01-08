import { applyMiddleware, compose } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {}
const middleware = [thunk]

const store = configureStore(
    { reducer: rootReducer },
    initialState,
    compose(
        applyMiddleware(...middleware),
        (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
            compose
    )
)

export default store
