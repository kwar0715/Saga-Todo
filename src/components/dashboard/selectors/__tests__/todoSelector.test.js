import getTodos from '../todoSelector';
import {fromJS, List} from 'immutable'

test('Test Selector Empty array',()=>{

    const todoSelector = getTodos(fromJS({
        todoList: [],
        searchTerm: ""
    }));
    expect(todoSelector).toBe(List([]))
})

test('Test Selector Non Empty array',()=>{

    const todoSelector = getTodos(fromJS({
        todoList: [{
            id: '1',
            title: "Title 1",
            description: "description 1",
            completed: true
        },
        {
            id: '2',
            title: "Title 2",
            description: "description 2",
            completed: true
        }],
        searchTerm: ""
    }));
    expect(todoSelector).toEqual(fromJS([{
        id: '1',
        title: "Title 1",
        description: "description 1",
        completed: true
    },
    {
        id: '2',
        title: "Title 2",
        description: "description 2",
        completed: true
    }]))
})

test('Test Selector search term is undefined',()=>{

    const todoSelector = getTodos(fromJS({
        todoList: [{
            id: '1',
            title: "Title 1",
            description: "description 1",
            completed: true
        },
        {
            id: '2',
            title: "Title 2",
            description: "description 2",
            completed: true
        }],
        searchTerm: undefined
    }));
    expect(todoSelector).toEqual(fromJS([{
        id: '1',
        title: "Title 1",
        description: "description 1",
        completed: true
    },
    {
        id: '2',
        title: "Title 2",
        description: "description 2",
        completed: true
    }]))
})

test('Test Selector Search term is empty',()=>{

    const todoSelector = getTodos(fromJS({
        todoList: [{
            id: '1',
            title: "Title 1",
            description: "description 1",
            completed: true
        },
        {
            id: '2',
            title: "Title 2",
            description: "description 2",
            completed: true
        }],
        searchTerm: ""
    }));
    expect(todoSelector).toEqual(fromJS([{
        id: '1',
        title: "Title 1",
        description: "description 1",
        completed: true
    },
    {
        id: '2',
        title: "Title 2",
        description: "description 2",
        completed: true
    }]))
})

test('Test Selector Search term has valid string and todos should not be filtered',()=>{

    const todoSelector = getTodos(fromJS({
        todoList: [{
            id: '1',
            title: "A",
            description: "description 1",
            completed: true
        },
        {
            id: '2',
            title: "B",
            description: "description 2",
            completed: true
        }],
        searchTerm: "XL"
    }));
    expect(todoSelector).toEqual(fromJS([]))
})