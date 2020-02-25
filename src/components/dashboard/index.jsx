import React from 'react';
import { connect } from "react-redux";
import Header from './header';
import Loading from '../loader';
import CardsGrid from './cardsGrid';

class Dashboard extends React.Component{

    constructor(props){
        super(props);

        this.state={
            searchTerm:''
        }
        
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    componentDidMount(){
        this.props.loadTodoList();
    }

    onSearchSubmit(event){
        event.preventDefault();
        this.setState({searchTerm: event.target.txtSearch.value});
    }
    
    render(){
        const {loading, todoList} = this.props;
        if(loading){
            return <Loading/>
        }
        return (
            <>
            <Header onSearchSubmit={this.onSearchSubmit}/>
            <CardsGrid 
                searchTerm={this.state.searchTerm} 
                todoList={todoList} 
                saveTodo={this.props.saveTodo}
                deleteTodo={this.props.deleteTodo}
            />
        </>  
        )
    }
}

const mapStateToProps = state => {
    return({
        todoList: state.todoList,
        loading: state.loading
    })
};
  
const mapDispatchToProps = dispatch => ({
    loadTodoList: () => dispatch({type: 'LOAD_TODO_LIST'}),
    saveTodo: (payload) => dispatch({type: 'SAVE_TODO', payload}),
    deleteTodo: (payload) => dispatch({type: 'DELETE_TODO', payload})
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);