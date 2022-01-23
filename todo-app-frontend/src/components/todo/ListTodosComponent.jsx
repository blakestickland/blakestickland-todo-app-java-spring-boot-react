import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService.js";

const ListTodosComponent = () => {
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    refreshTodos();
  }, []);

  const refreshTodos = () => {
    let username = AuthenticationService.getLoggedInUsername();
    TodoDataService.retrieveAllTodos(username)
      .then(
        response => {
          setTodos(response.data);
        }
      )

  }
  
  const updateTodoClicked = (id) => {
    console.log("update " + id);
    navigate(`/todos/${id}`);

    // /todos/${id}
    // let username = AuthenticationService.getLoggedInUsername();
    // // console.log(id + " " + username);
    // TodoDataService.updateTodo(username, id)
    //   .then(
    //     response => {
    //       setMessage(`Update of todo ${id} Successful!`);
    //       refreshTodos();
    //     }
    //   )
  } 
  
  const deleteTodoClicked = (id) => {
    let username = AuthenticationService.getLoggedInUsername();
    // console.log(id + " " + username);
    TodoDataService.deleteTodo(username, id)
      .then(
        response => {
          setMessage(`Delete of todo ${id} Successful!`);
          refreshTodos();
        }
      )
  } 

  return (
    <div>
      <h1>List Todos</h1>
      {message && <div className="alert alert-success">{message}</div>}
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>description</th>
              <th>Target Date</th>
              <th>Is Completed?</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                <td>{todo.targetDate.toString()}</td>
                <td><button className="btn btn-success" onClick={() => updateTodoClicked(todo.id)}>Update</button></td>
                <td><button className="btn btn-warning" onClick={() => deleteTodoClicked(todo.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTodosComponent;