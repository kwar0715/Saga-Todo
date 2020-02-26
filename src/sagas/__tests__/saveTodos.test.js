import { testSaga } from 'redux-saga-test-plan';
import API from '../API';
import { saveTodo } from '../saveTodo';

it('Save a todo successfully', ()=>{
    const payload = {
        id:'1',
        title:'title',
        description:'description'
    }
    testSaga(saveTodo, 
        {
            payload
        })
    .next()
    .call(API.saveTodo, payload)
    .next()
    .put({
        type: 'TODO_SAVED'
      })
    .next()
    .put({
        type: 'LOAD_TODO_LIST'
      })
    .next()
    .isDone();
})

it('Throwing an error when save data', ()=>{
    const error = new Error('error');
    const payload = {
        id:'1',
        title:'title',
        description:'description'
    }
    testSaga(saveTodo, 
        {
            payload
        })
    .next()
    .call(API.saveTodo, payload).throw(error)
    .put({
        type: 'TODO_SAVED_ERROR',
        message: 'error',
      })
    .next()
    .put({
        type: 'LOAD_TODO_LIST'
      })
    .next()
    .isDone();
})