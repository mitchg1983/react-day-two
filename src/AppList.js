import React, { Component } from "react";
import "./App.css";

export class App extends Component {
  state = {
    list: [
      {
        id: 1,
        item: "tp",
      },
      {
        id: 2,
        item: "paper towels",
      },
      {
        id: 3,
        item: "kitchen soap",
      },
    ],
  };

  showItemList = () => {
    return (
      <ul>
        {this.state.list.map(({ item, id }) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    );
  };

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <p>We are going to map some data</p>
        <ul>
          {this.state.list.map(({ item, id }) => {
            return <li key={id}>{item}</li>;
          })}
        </ul>
        <br></br>
        <ul>
          {this.state.list.map(({ item, id }) => (
            <li key={id}>{item}</li>
          ))}
        </ul>
        {this.showItemList()}
      </div>
    );
  }
}

export default App;
