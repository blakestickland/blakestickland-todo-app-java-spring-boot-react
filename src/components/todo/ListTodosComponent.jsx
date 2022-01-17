import React from "react";
import { useState } from "react";

const ListTodosComponent = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      description: "Learn React",
      done: false,
      targetDate: new Date(),
    },
    {
      id: 2,
      description: "Make pizza dough",
      done: false,
      targetDate: new Date(),
    },
    {
      id: 3,
      description: "Take son to cinema",
      done: false,
      targetDate: new Date(),
    },
    {
      id: 4,
      description: "Get PCR test",
      done: false,
      targetDate: new Date(),
    },
  ]);

  return (
    <div>
      <h1>List Todos</h1>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>description</th>
              <th>Is Completed?</th>
              <th>Target Date</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                <td>{todo.targetDate.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTodosComponent;