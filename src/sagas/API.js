import fetch from 'node-fetch'
import {remove} from 'lodash';
import todos from './mocks/todos';

const headers = { 'Content-Type': 'application/json' };
const backend = process.env.BACKEND || "";

const storeData = {
    todos
}

const makeRequest = async(url, method, data, headers) =>{
    console.log(backend)
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
    await sleep(1000);
    if(url==='/data'){
        return storeData;
    }
    if(url==='/add'){
        remove( storeData.todos, n=> n.id===data.id);
        const todo={
            id: data.id, 
        title: data.title, 
        description: data.description
        }   
        const newTodos = [...storeData.todos,todo];
        storeData.todos = newTodos;
    }
    if(url==='/remove'){
        remove( storeData.todos, n=> n.id===data.id);
    }
}

const sleep = (mills) => new Promise(resolve=> setTimeout(resolve,mills))

const fetchTodoList = async () => (await makeRequest(`/data`));
const saveTodo = async (data) => (await makeRequest(`/add`,'POST', data, headers));
const deleteTodo = async (data) => (await makeRequest(`/remove`,'POST', data, headers));

export default{
    fetchTodoList,
    saveTodo,
    deleteTodo
}