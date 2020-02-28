import SagaTester from 'redux-saga-tester';
import { runSaga } from 'redux-saga';
import sinon from 'sinon';
import reducer from '../../rootReducers';
import { fromJS, Map } from 'immutable'
import {fetchTodoList} from '../../sagas/loadTodos'
import API from '../API';

test('with redux-saga-tester', async () => {
  const sagaTester = new SagaTester({
    initialState: fromJS({
      todoList: [],
      loading: true,
      searchTerm: ''
    }),
    reducers: reducer
  });

  API.fetchTodoList = jest.fn(()=>({
    todos:[]
  }));

  sagaTester.start(fetchTodoList);

  sagaTester.dispatch({type:'LOAD_TODO_LIST'});

  expect(sagaTester.wasCalled('IS_LOADING')).toBe(true);

  await sagaTester.waitFor('TODO_LIST_LOADED');

  expect(sagaTester.getState()).toEqual(Map({
    todoList: [],
    loading: false,
    searchTerm: ''
 }));
});


test('Testing the full Saga', async () => {
  const dispatched = [];
  sinon.stub(API, 'fetchTodoList').callsFake(() => ({
      todos: []
    })
  );

  await runSaga({
    dispatch: (action) => dispatched.push(action)
  },fetchTodoList).toPromise();

  expect(API.fetchTodoList.calledWith())
  expect(dispatched).toStrictEqual([
    {
      payload: true,
      type: "IS_LOADING",
    },
    {
      todoList: [],
      type: "TODO_LIST_LOADED"
    },
    {
      payload: false,
      type: "IS_LOADING",
    }
  ])
});