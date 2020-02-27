import {  testSaga } from 'redux-saga-test-plan';
import API from '../API';
import { fetchTodoList } from '../loadTodos';

const payLoad = {
  todos: []
}

it('Load todos successfully', ()=>{
  testSaga(fetchTodoList)
  .next()
  .put({
    type: 'IS_LOADING',
    payload: true,
  })
  .next()
  .call(API.fetchTodoList).next(payLoad)
  .put({
    type: 'TODO_LIST_LOADED',
    todoList: [],
  })
  .next()
  .put({
    type: 'IS_LOADING',
    payload: false,
  })
  .next()
  .isDone();
})

it('Throwing an error when deleting data', ()=>{
  const error = new Error('error');
  testSaga(fetchTodoList)
  .next()
  .put({
    type: 'IS_LOADING',
    payload: true,
  })
  .next()
  .call(API.fetchTodoList).throw(error)
  .put({
    type: 'TODO_LIST_LOADED_ERROR',
    message: 'error',
  })
  .next()
  .put({
    type: 'IS_LOADING',
    payload: false,
  })
  .next()
  .isDone();
})

