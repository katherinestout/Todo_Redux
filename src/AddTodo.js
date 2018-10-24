import React, {Component} from 'react';

class AddTodo extends Component {
    state = {
        content: ''
    }
//handeler functions:

//set state so that content matches state, so it is insynch with input
    handleChange = (e) => {
       this.setState({
           content: e.target.value
       })
    }
    handleSubmit = (e) => {
        //prevent default action of refreshing page
        e.preventDefault();
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