import { createSelector } from 'reselect'
import { toLower, trim} from 'lodash';

const getTodos = (state) => {

  const todoList = state.get('todoList');
  const searchTerm = state.get('searchTerm');

  return todoList.filter(todo=> {
    // if search term is not defined or empty, should show all of elements    
    if(!searchTerm || searchTerm==="") return true;

    //else return all elements which match title and description
    const preparedSearchTerm = toLower(trim(searchTerm));
    return toLower(todo.title).includes(preparedSearchTerm)
    || toLower(todo.description).includes(preparedSearchTerm);
  })
}

const getTodoList = createSelector(
    [getTodos],
    (todos) => {
      return todos ? todos : []
    }
  )
  
  export default getTodoList