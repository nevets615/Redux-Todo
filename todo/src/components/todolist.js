import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

class TodoList extends React.Component {
  state = {
    newtodo: ''
  };

  handleChanges = e => {
    this.setState({
      newTodo: e.target.value
    });
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: '' });
  };

  render() {
    return (
      <>
      
        <div className="todo-list">
          {this.props.members &&
            this.props.todos.map((todos, index) => <h3>{todos.name}</h3>)}
        </div>
        <input
          type="text"
          value={this.state.newtodo}
          placeholder="Add new todo"
          onChange={this.handleChanges}
        />
        <button onClick={this.addtodo}>Add todo</button>
        <button onClick={this.filterTodos}>Clear</button>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo } 
)(TodoList);
  