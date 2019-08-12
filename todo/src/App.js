import React, { Component } from 'react';
import { connect } from 'react-redux';
import {clearCompleted} from './actions/index'
import Todos from './components/Todos';
import AddTodoForm from './components/AddTodoForm';


import './App.css';

class App extends Component {
  

  render (){
  return (
    <div>
     
      <AddTodoForm />

      <div>
        <Todos todos={this.props.todos} />
      </div>
      <button onClick={this.props.clearCompleted} type='button' >Clear Completed</button>
    </div>
  );
}}


const mapStateToProps = state => {
  return {
    todos: state.todos,
    name: state.name
  };
};


export default connect (mapStateToProps, {clearCompleted})  (App);
