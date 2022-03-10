import "./App.css";

import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }

  handleOnInputChange = (event) => {
    console.log(event.target.value);
    this.setState({
      email: event.target.value,
    });
  };

  handleFirstNameChange = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
  };

  handleLastNameChange = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleOnClickSubmit = (event) => {};

  render() {
    return (
      <div>
        <label>Email:</label>
        <input
          name="email"
          value={this.state.email}
          onChange={this.handleOnInputChange}
        ></input>
        <p>{this.state.email}</p>

        <form onSubmit={this.handleOnSubmit}>
          <input
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleFirstNameChange}
          />
          <button>Submit</button>
        </form>

        <input
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleLastNameChange}
        />
        <button onClick={this.handleOnClickSubmit}>Submit</button>
      </div>
    );
  }
}

export default App;
