import { Map } from 'immutable'

const TODO_LIST = "todoList"

const todoCompleted = (state, payload) => {
  const index = state.get(TODO_LIST).findIndex(o => o.get('id') === payload.id)
  return state.set(TODO_LIST, state.get(TODO_LIST).setIn([index,'completed'],payload.completed));
}

const todoDeleted = (state,payload)=>{
  return state.set(TODO_LIST, state.get(TODO_LIST).filter(o => o.get('id') !== payload.id));
}

const todoSaved = (state,payload)=>{
  state.updateIn(['todoList'],arr=>arr.push({
      id: payload.id, 
      title: payload.title, 
      description: payload.description,
      completed: payload.completed
    }))
  return state;
}

const rootReducer = (state = Map({}), action) => {
    switch (action.type) {
      case "TODO_LIST_LOADED": return state.set('todoList', action.todoList)
      case "IS_LOADING": return state.set('loading',action.payload)
      case "TODO_COMPLETED": return todoCompleted(state,action.payload);
      case "TODO_DELETED": return todoDeleted(state,action.payload);
      case "TODO_SAVED": return todoSaved(state,action.payload);
      case "SEARCH_TODO": return state.set('searchTerm', action.payload)
      default:
        return state
    }
}

export default rootReducer;