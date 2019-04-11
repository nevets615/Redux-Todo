import { ADD_TODO, TOGGLE_TODO, FILTER_TODO } from "../actions";

const initialState = {
  todos: [
    {
      task: "Organize Garage",
      id: 1528817077286,
      completed: false
    },
    {
      task: "Bake Cookies",
      id: 1528817084358,
      completed: false
    }
  ]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { task: action.payload, completed: false, id: Date.now() }
        ]
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed
            };
          } else {
            return todo;
          }
        })
      };

    case FILTER_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };

    default:
      return state;
  }
}

export default reducer;
