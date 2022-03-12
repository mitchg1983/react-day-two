import React, { Component } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

export class App extends Component {
  state = {
    todoArray: [
      {
        id: uuidv4(),
        todo: "Wash the Dog",
      },
      {
        id: uuidv4(),
        todo: "Poop the Dog",
      },
      {
        id: uuidv4(),
        todo: "Feed the Doggo",
      },
    ],
    newTodo: "",
  };

  showTodoArray = () => {
    return (
      <ul>
        {this.state.todoArray.map(({ todo, id }) => (
          <li key={id}>{todo}</li>
        ))}
      </ul>
    );
  };

  handleOnInputChange = (event) => {
    console.log(this.state.newTodo);
    this.setState({
      newTodo: event.target.value,
    });
    console.log(event);
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    let newArray = [
      ...this.state.todoArray,
      {
        id: this.state.todoArray.length + 1,
        todo: this.state.newTodo,
      },
    ];

    //set newTodo to an empty string here, this 'clears' the input from the backend
    this.setState({
      todoArray: newArray,
      newTodo: "",
    });
    //query selector gets a 'nodelist?' of all the input elements from the page
    //Array.from turns it into an array we can actually work with
    //manually set the value of the input fields to all be empty strings
    //would this work differently if we had default values for the input boxes?
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
  };

  render() {
    const { todo } = this.state;
    return (
      <div className="App">
        <form onSubmit={this.handleOnSubmit}>
          <label>Add new Todo:</label>
          <input name="todo" value={todo} onChange={this.handleOnInputChange} />
          <button>Submit</button>
        </form>
        {this.showTodoArray()}
      </div>
    );
  }
}

export default App;
