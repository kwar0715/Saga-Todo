import { call, put, takeLatest } from 'redux-saga/effects'
import API from './API'

export function* completeTodo(action) {
   yield put({type: "IS_LOADING", payload: true});
   try {
      yield call(API.completeTodo,action.payload);
      yield put({type: "TODO_COMPLETED", payload: action.payload});
   } catch (e) {
      yield put({type: "TODO_COMPLETED_ERROR", message: e.message});
   }
   yield put({type: "IS_LOADING", payload: false});
}

function* completeTodoSaga() {
  yield takeLatest("COMPLETE_TODO", completeTodo);
}

export default completeTodoSaga;