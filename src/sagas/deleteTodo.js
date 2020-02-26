import { call, put, takeEvery } from 'redux-saga/effects'
import API from './API'

export function* deleteTodo(action) {
   try {
      yield call(API.deleteTodo,action.payload);
      yield put({type: "TODO_DELETED"});
   } catch (e) {
      yield put({type: "TODO_DELETED_ERROR", message: e.message});
   }
   yield put({type: "LOAD_TODO_LIST"});
}

function* deleteTodoSaga() {
  yield takeEvery("DELETE_TODO", deleteTodo);
}

export default deleteTodoSaga;