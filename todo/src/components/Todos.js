import React  from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';



const style ={textDecoration: 'line-through'};

const Todos = (props) => {
console.log(props);

  return (
    <div>
    

      {props.todos.map(todo => (
        
        <li
        style={ todo.completed ? style: null}
        onClick={() => props.toggleTodo(todo.id)}
        key={todo.id}
        >

        {todo.name}
        

        </li>

      ))}
    </div>
  )
}

export default connect(null, { toggleTodo })(Todos)
//first param in first parens is mapStateToProps, second is mapActionsToProps
//second set of parens is what is being passed to the stope