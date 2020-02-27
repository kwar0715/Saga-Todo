import { call, put, takeEvery } from 'redux-saga/effects'
import API from './API'

export function* deleteTodo(action) {
   yield put({type: "IS_LOADING", payload: true});
   try {
      yield call(API.deleteTodo,action.payload);
      yield put({type: "TODO_DELETED", payload: action.payload});
   } catch (e) {
      yield put({type: "TODO_DELETED_ERROR", message: e.message});
   }
   yield put({type: "IS_LOADING", payload: false});
}

function* deleteTodoSaga() {
  yield takeEvery("DELETE_TODO", deleteTodo);
}

export default deleteTodoSaga;