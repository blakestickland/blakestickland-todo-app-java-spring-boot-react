import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthenticationService from "./AuthenticationService.js";



const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hasLoginFailed, setHasLoginFailed] = useState(false);
  const [showSuccessfulLogin, setShowSuccessfulLogin] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event) => {
    console.log(username);
    if (event.target.name === "username") setUsername(event.target.value);
    else if (event.target.name === "password") setPassword(event.target.value);
  };

  const loginClicked = (event) => {
    // username, password
    // if (username === "blakelists" && password === "password") {
    //   AuthenticationService.registerSuccessfulLogin(username, password);
    //   navigate(`/welcome/${username}`);
    //   // setShowSuccessfulLogin(true);
    //   // setHasLoginFailed(false);
    // } else {
    //   setShowSuccessfulLogin(false);
    //   setHasLoginFailed(true);
    //   console.log("Invalid credentials");
    // }
    
  //   AuthenticationService
  //   .executeBasicAuthenticationService(username, password)
  //   .then(() => {
  //     AuthenticationService.registerSuccessfulLogin(username, password);
  //     navigate(`/welcome/${username}`);    
  //   }).catch(() => {
  //       setShowSuccessfulLogin(false);
  //       setHasLoginFailed(true);
  //   })
  // };

    AuthenticationService
    .executeJwtAuthenticationService(username, password)
    .then((response) => {
      console.log(response);
      AuthenticationService.registerSuccessfulLoginForJwt(username, response.data.token);
      navigate(`/welcome/${username}`);    
    }).catch(() => {
        setShowSuccessfulLogin(false);
        setHasLoginFailed(true);
    })
  };

  return (
    <div>
      <h1>Login</h1>
      <div className="container">
        {hasLoginFailed && (
          <div className="alert alert-warning">Invalid Credentials</div>
        )}
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
        <button className="btn btn-success" onClick={loginClicked}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginComponent;