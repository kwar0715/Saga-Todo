import fetch from 'node-fetch'
import { remove, findIndex } from 'lodash';
import todos from './mocks/todos';
import { sleep } from '../util';

const headers = { 'Content-Type': 'application/json' };
const backend = process.env.BACKEND || "";
const FAKE_REQUEST_DELAY = 500;

const storeData = {
    todos
}

const makeRequest = async(url, method, data, headers) =>{
    if(backend!==''){
        if(!method){
            return await(await fetch(`${backend}${url}`)).json();
        }
        return await(await fetch(`${backend}${url}`, { 
            method, 
            body: JSON.stringify(data), 
            headers}
            )).json();
    }
    await sleep(FAKE_REQUEST_DELAY);
    if(url==='/data'){
        return storeData;
    }
    if(url==='/add'){
        remove( storeData.todos, n=> n.id===data.id);
        const todo={
            id: data.id, 
        title: data.title, 
        description: data.description,
        completed:data.completed
        }   
        const newTodos = [...storeData.todos,todo];
        storeData.todos = newTodos;
    }
    if(url==='/remove'){
        remove( storeData.todos, n=> n.id===data.id);
    }
    if(url==='/complete'){
        const i = findIndex(storeData.todos, todo => todo.id===data.id)
        storeData.todos[i].completed = data.completed
    }
}

const fetchTodoList = async () => (await makeRequest(`/data`));
const saveTodo = async (data) => (await makeRequest(`/add`,'POST', data, headers));
const deleteTodo = async (data) => (await makeRequest(`/remove`,'POST', data, headers));
const completeTodo = async (data) => (await makeRequest(`/complete`,'POST', data, headers));

export default{
    fetchTodoList,
    saveTodo,
    deleteTodo,
    completeTodo
}