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
  //generate a random number for each id
  addTodo = (todo) => {
      todo.id = Math.random();
    //create a new array, and then dumping each item in old array... 
    //into this array use spread operator to get each item and empty them in array todos
      let todos = [...this.state.todos, todo];
      this.setState({
        todos
      })

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
