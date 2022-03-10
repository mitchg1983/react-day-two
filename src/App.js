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

  handleOnInputChange = (event) => {
    console.log(this.state.newTodo);
    this.setState({
      newTodo: event.target.value,
    });
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

  handleOnSubmit = (event) => {
    event.preventDefault();
    let newArray = [
      ...this.state.todoArray,
      {
        id: this.state.todoArray.length + 1,
        todo: this.state.newTodo,
      },
    ];
    this.setState({
      todoArray: newArray,
    });
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
