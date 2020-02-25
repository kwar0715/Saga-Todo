import React from 'react';
import { connect } from "react-redux";
import Header from './header';
import Loading from '../loader';
import Cards from './todocards';

class Dashboard extends React.Component{
    
    render(){
        const {loading, todos} = this.props;
        if(loading){
            return <Loading/>
        }
        return (
            <>
            <Header/>
            <Cards todos={todos}/>
        </>  
        )
    }
}

const mapStateToProps = state => {
    return({
        todos: state.todos,
        loading: false
    })
};
  
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);