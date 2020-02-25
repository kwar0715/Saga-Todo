import {createStore, compose, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducers from './rootReducers'
import { test } from './sagas';

const sagaMiddleware = createSagaMiddleware()

const initialState = {
    todos: [],
    loading: true
}


const store = createStore(state => state, initialState , compose(applyMiddleware(sagaMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

console.log(store.getState())

sagaMiddleware.run(test);

export default store;