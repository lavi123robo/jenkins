import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import TodoList from "./TodoList";

export default function FormWrapper() {
  const [inputData, setInputData] = useState("");
  const [todoList, setTodoList] = useState(["Do exericse"]);

  const inputDataChange = (event) => {
    setInputData(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("inputData ", inputData)
    if (inputData) {
      setTodoList(prevState => [...prevState, inputData]);
      setInputData("");
    }
  }

  return (
    <>
      <div className="container my-3">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div>Form</div>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="todo">
                <Form.Control
                  type="text"
                  placeholder="Try tying: do excercise"
                  onChange={inputDataChange}
                  value={inputData}
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Submit
              </Button>
            </Form>
            <TodoList todoList={todoList} />
          </div>
        </div>
      </div>
    </>
  );
}
