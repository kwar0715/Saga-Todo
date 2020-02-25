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
      default:
        return state
    }
}

export default rootReducer;