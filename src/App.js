import React, { Component } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  Col,
  Row,
  Button,
  Card,
  Container,
  Stack,
  ListGroup,
} from "react-bootstrap";

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
    errorMessage: "",
  };

  showTodoArray = () => {
    return (
      // <ul>

      // </ul>

      <ListGroup>
        {this.state.todoArray.map(({ todo, id }) => (
          <ListGroup.Item key={id}>{todo}</ListGroup.Item>
        ))}
      </ListGroup>
    );
  };

  showError = () => {
    return <p className="text-danger">{this.state.errorMessage}</p>;
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
    const { newTodo } = this.state;

    //this function will return true, if the value passed to it is null,
    //or if the value is a string and it only contains spaces(whitespaces?)
    const isNullEmptyBlank = (str) => {
      console.log("null running");
      return str === null || str.match(/^ *$/) !== null;
    };

    if (!isNullEmptyBlank(newTodo)) {
      this.setState({
        errorMessage: "",
      });
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
    } else {
      console.log("Error, the input cannot be empty.");
      this.setState({
        errorMessage: "Error, the input cannot be empty.",
      });
    }
  };

  render() {
    const { todo } = this.state;
    return (
      <div className="App">
        <Container>
          <Row>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>
                  Welcome to the last ToDo List, you'll ever need...
                </Card.Title>

                <div className="Inputform">
                  <form onSubmit={this.handleOnSubmit}>
                    <Stack direction="horizontal" gap={3}>
                      <label>Add new Todo</label>
                      <input
                        name="todo"
                        value={todo}
                        onChange={this.handleOnInputChange}
                      />
                      <button>Submit</button>
                    </Stack>
                  </form>
                </div>
              </Card.Body>
              <div>{this.showError()}</div>
            </Card>
          </Row>
          <Row>
            <div className="Tasklist">{this.showTodoArray()}</div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
