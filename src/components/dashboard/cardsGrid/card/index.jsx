import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {  Card, Button, Form } from 'react-bootstrap';

const cardStyle={
    width: "18rem",
    height: "18rem"
}

const centerText = {
    textAlign : "center"
}

class CardItem extends React.Component{

    constructor(props){
        super(props);

        this.state={
            isNew: props.isNew || false,
            isEditable: false,
            data: {
                id: props.id,
                title: props.title,
                description: props.description
            }
        }

        this.onCreateNewTodo = this.onCreateNewTodo.bind(this);
        this.onDeleteTodo = this.onDeleteTodo.bind(this);
    }

    onCreateNewTodo(event){
        event.preventDefault();
        this.props.saveTodo({
            id: event.target.txtid.value || uuidv4(),
            title: event.target.txtTitle.value,
            description: event.target.txtDescription.value
        });
    }

    onDeleteTodo(event){
        event.preventDefault();
        this.props.deleteTodo({
            id: this.state.data.id
        });
    }

    render(){
        const { isNew, isEditable, data} = this.state;

        if(isNew){
            return(
                <Card bg="secondary" style={cardStyle}>
                    <Card.Body onClick={()=> this.setState({isNew: false,isEditable: true})} >
                        <Card.Title style={centerText}>Create New</Card.Title>
                    </Card.Body>
                </Card>
            )
        }
        const {id, title, description} = data;
        if(isEditable){
            return(
                <Form onSubmit={this.onCreateNewTodo}>
                    <Card bg="light" style={cardStyle}>
                        <Card.Body>
                            <Card.Title>
                                <Form.Control id="txtTitle" type="text" defaultValue={title} placeholder="Title" />
                            </Card.Title>
                            <Card.Text>
                                <Form.Control id="txtDescription" type="text" defaultValue={description} placeholder="Description"/>
                            </Card.Text>
                            <Card.Text hidden>
                                <Form.Control id="txtid" type="text" defaultValue={id} placeholder="Description"/>
                            </Card.Text>
                        <Button variant="primary" type="submit">Save</Button>
                        <Button variant="danger" onClick={()=> this.setState({isNew: true, isEditable: false})}>Cancel</Button>
                        </Card.Body>
                    </Card>
                </Form>)
        }
        return(
                <Card bg="light" style={cardStyle}>
                    <Card.Body>
                        <Card.Title>
                         {title}
                        </Card.Title>
                        <Card.Text>
                         {description}
                        </Card.Text>
                    <Button variant="success" onClick={()=> this.setState({ isEditable: true})}>Edit</Button>
                    <Button variant="danger" onClick={this.onDeleteTodo}>Delete</Button>
                    </Card.Body>
                </Card>)
    }
}

export default CardItem;