import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addTodo } from '../actions/index';


class AddTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText:''
    };
  }

  
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addTodoHandler = (event) =>{
    event.preventDefault();
    this.props.addTodo(this.state.todoText);
    this.setState({
      todoText:''
    })
  }

  render(){
    console.log(this.state.todoText);
  return (
    <div>
      <form onSubmit={ this.addTodoHandler }>
        <div>
          <input
            name="todoText"
            value={this.state.todoText}
            type="text"
            onChange={this.handleInputChange}
            placeholder="Add a Todo"
          />
          <button type='submit' >Submit</button>
        </div>
      </form>
      
    </div>
  );
  }
};

export default connect (null, { addTodo }) (AddTodoForm);