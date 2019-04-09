import React from 'react';
import { connect } from 'react-redux';

import { addTodo, toggleTodo, filterTodo } from '../actions';

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

  toggleTodo = id => {
    this.props.toggleMember(id);
  };

  filterTodo = id => {
    this.props.filterTodo(id);
  }

  render() {
    return (
      <>
       <h2>{this.props.normalProp}</h2>
        <div className="todo-list">

          {this.props.todos &&
            this.props.todos.map((todo, index) => <h3>{todo.task}</h3>)}
        </div>
        <input
          type="text"
          value={this.state.newTodo}
          placeholder="Add new todo"
          onChange={this.handleChanges}
        />
        <button onClick={this.addTodo}>Add todo</button>
        <button onClick={this.filterTodo}>Clear</button>
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
  