import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

//store the todos in the state

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play some mario kart'}
    ]
  }
  //delete functionality
  deleteTodo = (id) => {
    //console.log(id);
  //if this todo id is not equal to that id then return true
  //if they are equal than it is going to delete it
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }

  //add a new todo to the list/ array
  addTodo = (todo) => {

  }


  render() {
    return (
      <div className="todo-app container">
          <h1>Todo's</h1>
          <Todos todos = {this.state.todos} 
          deleteTodo = {this.deleteTodo}/>
          <AddTodo addTodo = {this.addTodo}/>
      </div>
    );
  }
}

export default App;
