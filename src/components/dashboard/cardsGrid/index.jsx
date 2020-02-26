import React from 'react';
import CardItem from './card';
import { toLower, trim} from 'lodash';
import { CardColumns } from 'react-bootstrap';

const style={
    cardDeck: {
        marginTop: '30px'
    }
}

const CardsGrid = ({ todoList, saveTodo, deleteTodo, searchTerm }) => {
    const filteredTodos = todoList.filter(todo=> {
        if(!searchTerm || searchTerm==="") return true;
        const preparedSearchTerm = toLower(trim(searchTerm));
        return toLower(todo.title).includes(preparedSearchTerm)
        || toLower(todo.description).includes(preparedSearchTerm);
    }).map(todo=> {
        const {title, description, id} = todo;
        return (
            <CardItem title={title} description={description} id={id} saveTodo={saveTodo} deleteTodo={deleteTodo}/>
        )
     })
    return(<CardColumns style={style.cardDeck}>
        {filteredTodos}
        <CardItem isNew saveTodo={saveTodo}/>
    </CardColumns>)
}


export default CardsGrid;