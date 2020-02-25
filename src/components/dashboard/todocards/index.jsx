import React from 'react';
import { CardColumns, Card, Button } from 'react-bootstrap';

const style={
    cardDeck: {
        marginTop: '30px'
    }
}

class Cards extends React.Component{

    generateCardItem(todo){
        return(
            <Card bg="light">
            <Card.Body>
                <Card.Title>{todo.title}</Card.Title>
                <Card.Text>
                {todo.description}
              </Card.Text>
              <Button variant="danger">Delete</Button>
            </Card.Body>
          </Card>)
    }

    render(){
        const {todos} = this.props;
        return (
            <CardColumns style={style.cardDeck}>
                {todos.map(todo=>this.generateCardItem(todo))}
             </CardColumns>   
        );
    }
}

export default Cards;