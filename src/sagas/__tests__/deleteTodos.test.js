
import { testSaga } from 'redux-saga-test-plan';
import API from '../API';
import { deleteTodo } from '../deleteTodo';

it('Delete a todo successfully', ()=>{
    const payload = {
        id:'1'
    }
    testSaga(deleteTodo, 
        {
            payload
        })
    .next()
    .put({
        type: 'IS_LOADING',
        payload: true,
    })
    .next()
    .call(API.deleteTodo, payload)
    .next()
    .put({
        type: 'TODO_DELETED',
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

it('Throwing an error when deleting data', ()=>{
    const error = new Error('error');
    const payload = {
        id:'1'
    }
    testSaga(deleteTodo, 
        {
            payload
        })
    .next()
    .put({
        type: 'IS_LOADING',
        payload: true,
    })
    .next()
    .call(API.deleteTodo, payload).throw(error)
    .put({
        type: 'TODO_DELETED_ERROR',
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