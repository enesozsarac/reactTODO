import React, { useState } from "react";
import "./App.css";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  const inputChange = (e) => {
    setTodoInput(e.target.value);
  };

  const addTodo = () => {
    event.preventDefault();
    setTodos([...todos, todoInput]);
    console.log(todos);
    setTodoInput("");
  };

  const deleteTodo = (value) => {
    setTodos((todos) => {
      return todos.filter((todo) => todo !== value);
    });
  };

  const Wrapper = styled.div`
    cursor: pointer;
  `;

  return (
    <React.Fragment>
      <Container>
        <Form>
          <Form.Group className="m-3 text-center ">
            <Form.Label className="mb-2">Hedef</Form.Label>
            <div className="d-flex justify-content-center">
              <Form.Control
                onChange={inputChange}
                type="text"
                value={todoInput}
                className="w-50 mx-3"
              />
              <Button
                onClick={addTodo}
                className="px-4"
                variant="primary"
                type="submit"
              >
                Ekle
              </Button>
            </div>
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Wrapper>
              {todos.map((todo, index) => (
                <div key={index} onClick={() => deleteTodo(todo)}>
                  {todo}
                </div>
              ))}
            </Wrapper>
          </div>
        </Form>
      </Container>
    </React.Fragment>
  );
}

export default App;
