import React from 'react';
import CardItem from './card';
import {filter,indexOf, toLower, trim} from 'lodash';
import { CardColumns } from 'react-bootstrap';

const style={
    cardDeck: {
        marginTop: '30px'
    }
}

const CardsGrid = ({ todoList, saveTodo, deleteTodo, searchTerm }) => (
    <CardColumns style={style.cardDeck}>
        {filter(todoList, todo=> {
            if(!searchTerm || searchTerm==="") return true;
            return toLower(todo.title) === toLower(trim(searchTerm))
        })
        .map(todo=> {
           const {title, description, id} = todo;
           return (
               <CardItem title={title} description={description} id={id} saveTodo={saveTodo} deleteTodo={deleteTodo}/>
           )
        })}
        <CardItem isNew saveTodo={saveTodo}/>
    </CardColumns>
)


export default CardsGrid;