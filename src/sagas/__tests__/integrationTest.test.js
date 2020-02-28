import SagaTester from 'redux-saga-tester';
import { runSaga } from 'redux-saga';
import sinon from 'sinon';
import reducer from '../../rootReducers';
import { fromJS } from 'immutable'
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

  sagaTester.start(fetchTodoList);

  sagaTester.dispatch({type:'LOAD_TODO_LIST'});

  expect(sagaTester.wasCalled({
    type: 'TODO_LIST_LOADED',
    todoList: [],
  })).toBe(false);

  expect(sagaTester.getState()).toEqual(fromJS({
    todoList: [],
    loading: true,
    searchTerm: ''
 }));
});


test('Testing the full Saga', async () => {
  const dispatched = [];
  sinon.stub(API, 'fetchTodoList').callsFake(() => ({
      todos: []
    })
  );

  const y = await runSaga({
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