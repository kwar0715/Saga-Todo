import { testSaga } from 'redux-saga-test-plan';
import API from '../API';
import { completeTodo } from '../completeTodo';

it('Completed a todo successfully', ()=>{
    const payload = true
    testSaga(completeTodo, 
        {
            payload
        })
    .next()
    .put({
        type: 'IS_LOADING',
        payload: true,
      })
    .next()
    .call(API.completeTodo, payload)
    .next()
    .put({
        type: 'TODO_COMPLETED',
        payload
      })
    .next()
    .put({
        type: 'IS_LOADING',
        payload: false,
    })
    .next()
    .isDone();
})

it('Throwing an error when save data', ()=>{
    const error = new Error('error');
    const payload = true
    testSaga(completeTodo, 
        {
            payload
        })
    .next()
    .put({
        type: 'IS_LOADING',
        payload: true,
    })
    .next()
    .call(API.completeTodo, payload).throw(error)
    .put({
        type: 'TODO_COMPLETED_ERROR',
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