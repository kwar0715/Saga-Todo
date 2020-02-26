import {createStore, compose, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducers from './rootReducers'
import saveTodoSaga from './sagas/saveTodo'
import fetchTodoListSaga from './sagas/loadTodos';
import deleteTodoSaga from './sagas/deleteTodo';

const sagaMiddleware = createSagaMiddleware()

const initialState = {
    todoList: [],
    loading: true
}


const store = createStore(rootReducers, initialState , compose(applyMiddleware(sagaMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

sagaMiddleware.run(fetchTodoListSaga);
sagaMiddleware.run(saveTodoSaga);
sagaMiddleware.run(deleteTodoSaga);

export default store;