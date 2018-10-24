import React, {Component} from 'react';

class AddTodo extends Component {
    state = {
        content: ''
    }

    handleChange = (e) => {
       this.setState({
           content: e.target.value
       })
    }

    handleSubmit = (e) => {
        e.preventDefault();
       // console.log(this.state);
       //passing content into this function
       this.props.addTodo(this.state);
       //clearing the input, resetting the state..adding value to input
       this.setState({
           content: ''
       })
    }

    render(){
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                <label>Add new Todo:</label>
                <input type ="text" onChange={this.handleChange} 
                value ={this.state.content}/>
                </form>
            </div>
        )
    }
}

export default AddTodo;