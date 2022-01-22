import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

class TodoApp extends Component {
    render() {
        return (
          <div className="TodoApp">
            <h1>TODO Management App</h1>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginComponent />} />
                    <Route path="/login" element={<LoginComponent />} />
                    <Route path="/welcome/*" element={<WelcomeComponent />} />
                    <Route path="*" element={<ErrorComponent />} />
                </Routes>
            </Router>
            {/* <LoginComponent />
                <WelcomeComponent /> */}
          </div>
        );
    }
}

class WelcomeComponent extends Component {
    render() {
        return <div>Welcome {this.props.match.params.name}</div>
    }
}

function ErrorComponent() {
    return <div>An Error Occrred. I don't know what to do. Contact support at abcd-efgh-ijkl</div>
}

class LoginComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username : "username",
            password : "",
            hasLoginFailed : false,
            showSuccessfulLogin : false
        }
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleChange(event) {
        console.log(this.state);
        this.setState(
            {
                [event.target.name]: event.target.value,
            }
        );
    }

    loginClicked(event) {
        // username, password
        if(this.state.username === "username" && this.state.password === "password") {
            this.props.history.push(`/welcome/${this.state.username}`)
        }
        else {
            this.setState({ showSuccessfulLogin : false })
            this.setState({ hasLoginFailed: true });
            console.log("Invalid credentials");
        }
    }

    render() {
        return (
          <div>
            {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
            {this.state.showSuccessfulLogin && <div>Login Successful</div>}
            Username:{" "}
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            Password:{" "}
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <button onClick={this.loginClicked}>Login</button>
          </div>
        );
    }
}

export default TodoApp;