import {findIndex, remove} from 'lodash';

const todoCompleted = (state, payload) => {
  const i = findIndex(state.todoList, todo => todo.id===payload.id)
  const todoList = state.todoList;
  todoList[i].completed = payload.completed
  return Object.assign({}, state, {
    todoList
  })
}

const todoDeleted = (state,payload)=>{
  const todoList = state.todoList;
  remove(todoList, n=> n.id===payload.id)
  return Object.assign( {}, state, {
    todoList
  });
}

const todoSaved = (state,payload)=>{
  const todoList = state.todoList;
  remove( todoList, n=> n.id===payload.id);  
  todoList.push({
    id: payload.id, 
    title: payload.title, 
    description: payload.description,
    completed: payload.completed
  })
  return Object.assign( {}, state, {
    todoList
  });
}

const rootReducer = (state = {}, action) => {
    switch (action.type) {
      case "TODO_LIST_LOADED":
          return Object.assign({}, state, {
            todoList: action.todoList
          });
      case "IS_LOADING":
          return Object.assign({}, state, {
            loading: action.payload
      });
      case "TODO_COMPLETED": return todoCompleted(state,action.payload);
      case "TODO_DELETED": return todoDeleted(state,action.payload);
      case "TODO_SAVED": return todoSaved(state,action.payload);
      default:
        return state
    }
}

export default rootReducer;