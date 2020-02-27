import React from 'react';
import CardItem from './card';
import { toLower, trim} from 'lodash';
import { CardColumns } from 'react-bootstrap';

const style={
    cardDeck: {
        marginTop: '30px'
    }
}

const CardsGrid = ({ todoList, saveTodo, deleteTodo, completeTodo, searchTerm }) => (
    <CardColumns style={style.cardDeck}>
        {todoList.filter(todo=> {
        // if search term is not defined or empty, should show all of elements    
        if(!searchTerm || searchTerm==="") return true;

        //else return all elements which match title and description
        const preparedSearchTerm = toLower(trim(searchTerm));
        return toLower(todo.title).includes(preparedSearchTerm)
        || toLower(todo.description).includes(preparedSearchTerm);
    }).map(todo=> {
        const {title, description, id, completed} = todo;
        return (
            <CardItem title={title} 
                description={description} 
                id={id} 
                saveTodo={saveTodo} 
                deleteTodo={deleteTodo}
                completed={completed}
                completeTodo={completeTodo}/>
        )
     })}
        <CardItem isNew saveTodo={saveTodo}/>
    </CardColumns>
)


export default CardsGrid;