import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

//store the todos in the state of App component
//This is some dummy data, each has a property "content"
class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Learn Angular'},
      {id: 2, content: 'Read Harry Potter'}
    ]
  }


  //delete functionality
  //takes an id as parameter, can then access this also in Todos.js
  deleteTodo = (id) => {
  //if this todo id is not equal to that id in that array then return true
  //if they are equal than it is going to filter it out/delete it
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
        todos: todos
      })

  }

  render() {
    return (
      <div className="todo-app container">
          <h1 className="center blue-text">Todo's</h1>
          <Todos todos = {this.state.todos} 
              deleteTodo = {this.deleteTodo}/>
          <AddTodo addTodo = {this.addTodo}/>
      </div>
    );
  }
}

//passing Todos the todos prop so you can access the property using {this.state.todos}
//passed addTodo into AddTodo so you can access it in the handlesubmit in the AddTodos.js

export default App;
