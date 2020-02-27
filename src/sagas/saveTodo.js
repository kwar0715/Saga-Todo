import { call, put, takeEvery } from 'redux-saga/effects'
import API from './API'

export function* saveTodo(action) {
   yield put({type: "IS_LOADING", payload: true});
   try {
      yield call(API.saveTodo,action.payload);
      yield put({type: "TODO_SAVED", payload: action.payload});
   } catch (e) {
      yield put({type: "TODO_SAVED_ERROR", message: e.message});
   }
   yield put({type: "IS_LOADING", payload: false});
}

function* saveTodoSaga() {
  yield takeEvery("SAVE_TODO", saveTodo);
}

export default saveTodoSaga;