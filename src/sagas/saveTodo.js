import { call, put, takeEvery } from 'redux-saga/effects'
import API from './API'

export function* saveTodo(action) {
   try {
      yield call(API.saveTodo,action.payload);
      yield put({type: "TODO_SAVED"});
   } catch (e) {
      yield put({type: "TODO_SAVED_ERROR", message: e.message});
   }
   yield put({type: "LOAD_TODO_LIST"});
}

function* saveTodoSaga() {
  yield takeEvery("SAVE_TODO", saveTodo);
}

export default saveTodoSaga;