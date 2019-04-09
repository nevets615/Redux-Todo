export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const FILTER_TODO = 'FILTER_TODO';
export const addTodo = task => {
    console.log(task);
    return {
      type: ADD_TODO,
      payload: task
    };
  };

  export const toggleTodo = id => {
    return {
      type: TOGGLE_TODO,
      payload: id
    };
  };
  
  export const filterTodo = id => {
    return {
      type: FILTER_TODO,
      payload: id
    };
  };
