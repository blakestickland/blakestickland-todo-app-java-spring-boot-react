import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const TodoApp = () =>  {
    return (
      <div className="TodoApp">
        <Router>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/welcome/:name" element={<WelcomeComponent />} />
            <Route path="/todos" element={<ListTodosComponent />} />
            <Route path="/logout" element={<LogoutComponent />} />
            <Route path="*" element={<ErrorComponent />} />
          </Routes>
          <FooterComponent />
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
        </div>
    )
}

const HeaderComponent = () => {
    return (
      <header>
        <nav className="navbar navbar-expand-md navvbar-dark bg-dark">
          <div>
            <a href="https://www.in28minutes.com" className="navbar-brand text-secondary">
              BlakeStickland
            </a>
          </div>
          <ul className="navbar-nav">
            <li>
              <Link className="nav-link link-light" to="/welcome/in28minutes">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link link-light" to="/todos">
                Todos
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
            <li>
              <Link className="nav-link link-light" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="nav-link link-light" to="/logout">
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}

const FooterComponent = () => {
    return (
        <footer className="footer">
            <span className="text-muted">All Rights Reserved 2022 Blake Stickland</span>
        </footer>
    );
}

const LogoutComponent = () => {
    return (
      <div>
        <h1>You are logged out</h1>
        <div className="container">
            Thank you for using our application.
        </div>
      </div>
    );
}

const WelcomeComponent = () => {
    const { name } = useParams();

    return (
        <>
            <h1>Welcome!</h1>
            <div className="container">
                Welcome {name}. You can manage your todos <Link to="/todos">here</Link>.
            </div>
        </>
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
            <h1>Login</h1>
            <div className="container">
                {hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
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
                <button className="btn btn-success" onClick={loginClicked}>Login</button>
            </div>
        </div>
    );
  
}

export default TodoApp;
