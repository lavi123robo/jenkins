import ListGroup from "react-bootstrap/ListGroup";

const TodoList = ({ todoList }) => {
  return (
    <>
      <ListGroup className="my-3">
        {todoList.map((toddoItem) => (
          <ListGroup.Item key={toddoItem}>{toddoItem}</ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default TodoList;
