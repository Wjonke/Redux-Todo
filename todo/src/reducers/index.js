import { ADD_TODO, TOGGLE_TODO, CLEAR_COMPLETED } from '../actions';


export const initialState = {
  todos: [
    {
      name: 'Learn about reducers',
      completed: false,
      id: '000001'
    },
    {
      name: 'Get ready for build week',
      completed: false,
      id: '000002'
    },
    {
      name: 'Take Breaks!',
      completed: false,
      id: '000003'
    },
  ]
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        name: action.payload,
        completed: false,
        id: Date.now(),
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (action.payload === todo.id) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
          return todo;
        })
      };

    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };

    default:
      return state;
  }
};