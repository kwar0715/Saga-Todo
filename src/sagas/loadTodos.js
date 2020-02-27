import { call, put, takeEvery } from 'redux-saga/effects'
import API from './API'

export function* fetchTodoList() {
   yield put({type: "IS_LOADING", payload: true});
   try {
      const todoList = yield call(API.fetchTodoList);
      yield put({type: "TODO_LIST_LOADED", todoList: todoList.todos});
   } catch (e) {
      yield put({type: "TODO_LIST_LOADED_ERROR", message: e.message});
   }
   yield put({type: "IS_LOADING", payload: false});
}

function* fetchTodoListSaga() {
  yield takeEvery("LOAD_TODO_LIST", fetchTodoList);
}

export default fetchTodoListSaga;