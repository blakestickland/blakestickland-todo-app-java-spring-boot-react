import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import HelloWorldService from "../../api/todo/HelloWorldService";

const WelcomeComponent = () => {
  const { name } = useParams();
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [errorMessage, seteErrorMessage] = useState("");

  const retrieveWelcomeMessage = () => {
      HelloWorldService.executeHelloWorldPathVariableService(name)
        .then((response) => handleSuccessfulResponse(response))
        .catch(error => handleError(error));

    // HelloWorldService.executeHelloWorldBeanService()
    //   .then((response) => handleSuccessfulResponse(response))
    //   .catch((error) => console.log(error));

    // HelloWorldService.executeHelloWorldService()
    //   .then((response) => {
    //     console.log("regular resonse is: ", response);
    //     handleSuccessfulResponse(response);
    //   })
    //   .catch(error => console.log(error));
  }

  const handleSuccessfulResponse = (response) => {
    setWelcomeMessage(response.data.message); 
  }

  const handleError = (error) => {
    let errorMessage = "";

    if (error.message) {
      errorMessage += error.message;
    }
    if (error.response && error.response.data) {
      errorMessage += error.response.data.message;
    }
    setWelcomeMessage(errorMessage);
  }

  return (
    <>
      <div className="container">
        {errorMessage}
      </div>
      <h1>Welcome!</h1>
      <div className="container">
        Welcome {this.props.params.name}. You can manage your todos <Link to="/todos">here</Link>.
      </div>
      <div className="container">
        Click here to geta customised welcome message.
        <button
          onClick={retrieveWelcomeMessage}
          className="btn btn-success"
        >
          Get Welcome Message
        </button>
      </div>
      <div className="container">
        {welcomeMessage}
      </div>
    </>
  );
};

export default WelcomeComponent;