import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const TodoApp = () =>  {
    return (
      <div className="TodoApp">
        <h1>TODO Management App</h1>
        <Router>
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/welcome/:name" element={<WelcomeComponent />} />
            <Route path="/todos" element={<ListTodosComponent />} />
            <Route path="*" element={<ErrorComponent />} />
          </Routes>
        </Router>
      </div>
    );
}

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
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>description</th>
                        <th>Is Completed?</th>
                        <th>Target Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map (
                            todo =>
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

const WelcomeComponent = () => {
    const { name } = useParams();

    return (
        <div>
            Welcome {name}. You can manage your todos <Link to="/todos">here</Link>.
        </div>
    )
}

const ErrorComponent = () => {
  return (
    <div>
      An Error Occrred. I don't know what to do. Contact support at
      abcd-efgh-ijkl
    </div>
  );
}

const LoginComponent = () =>  {
    const [username, setUsername] = useState("username");
    const [password, setPassword] = useState("password");
    const [hasLoginFailed, setHasLoginFailed] = useState(false);
    const [showSuccessfulLogin, setShowSuccessfulLogin] = useState(false);

    const navigate = useNavigate(); 

//   constructor(props) {
    // super(props);

    // this.state = {
    //   username: "username",
    //   password: "",
    //   hasLoginFailed: false,
    //   showSuccessfulLogin: false,
    // };
    // this.handleChange = this.handleChange.bind(this);
    // this.loginClicked = this.loginClicked.bind(this);
//   }

  const handleChange = (event) => {
    console.log(username);
    if (event.target.name === "username") setUsername(event.target.value);
    else if (event.target.name === "password") setPassword(event.target.value);
  }

  const loginClicked = (event) => {
    // username, password
    if (
        username === "username" &&
        password === "password"
    ) {
        navigate(`/welcome/${username}`);
        console.log("loginClicked with correct credentials");
        setShowSuccessfulLogin(true);
        setHasLoginFailed(false);
    } else {
        setShowSuccessfulLogin(false);
        setHasLoginFailed(true);
        console.log("Invalid credentials");
    }
  }

    return (
        <div>
            {hasLoginFailed && <div>Invalid Credentials</div>}
            {showSuccessfulLogin && <div>Login Successful</div>}
            Username:{" "}
            <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            />
            Password:{" "}
            <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            />
            <button onClick={loginClicked}>Login</button>
        </div>
    );
  
}

export default TodoApp;
