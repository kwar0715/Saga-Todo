import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from './rootReducers'
import saveTodoSaga from './sagas/saveTodo'
import fetchTodoListSaga from './sagas/loadTodos';
import deleteTodoSaga from './sagas/deleteTodo';
import completeTodoSaga from './sagas/completeTodo';

const sagaMiddleware = createSagaMiddleware()

const initialState = {
    todoList: [],
    loading: true
}


const store = createStore(rootReducers, initialState , composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(fetchTodoListSaga);
sagaMiddleware.run(saveTodoSaga);
sagaMiddleware.run(deleteTodoSaga);
sagaMiddleware.run(completeTodoSaga)

export default store;