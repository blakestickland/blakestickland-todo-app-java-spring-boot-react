import React, { Component } from 'react';

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <LoginComponent />
            </div>
        )
    }
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
            console.log("Login Successful");
            this.setState({ showSuccessfulLogin : true })
            this.setState({ hasLoginFailed: false });
        }
        else {
            this.setState({ showSuccessfulLogin : false })
            this.setState({ hasLoginFailed: true });
        }
        console.log(this.state);
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