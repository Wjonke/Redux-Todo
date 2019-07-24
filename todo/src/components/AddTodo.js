import React from 'react';



const AddTodoForm = props => {
  return (
    <div>
      <input
        name="todoText"
        value={props.todoText}
        type="text"
        onChange={props.handleInputChange}
        placeholder="Add a Todo"
      />
      <button onClick={props.addTodo}>Submit</button>
    </div>
  );
};

export default AddTodoForm;