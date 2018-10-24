import React from 'react';


//functional component
//where we will render the todos and will pass it into App.js
//since we passed the todos prop (same concept for deleteTodo) to Todos in App.js, we can access those todos here
const Todos = ({todos, deleteTodo}) => {

//map through the todoList, and return each item in the list
//passing todos as a prop
//turnery operator: if we have todos, or if we dont have any todos
    const todoList = todos.length ? (
        //grab each todo and fire the function on each todo item
        //have to give each todo a unique id (key) 
        todos.map(todo => {
//add an onClick event to span with the deleteTodo, based on id, automatically fires function
            return(
                <div className = "collection-item" key={todo.id}>
                <span onClick={() => {deleteTodo(todo.id)}}>
                {todo.content}</span>
                </div>
            )
        })
    ) : (
        <p> You've nothing left to do! </p>
    )
    return(
        <div className= "todos-collection">
            {todoList}
        </div>
    )
}

export default Todos;