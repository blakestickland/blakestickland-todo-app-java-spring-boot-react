import React from "react";
import { useParams, Link } from "react-router-dom";

const WelcomeComponent = () => {
  const { name } = useParams();

  return (
    <>
      <h1>Welcome!</h1>
      <div className="container">
        Welcome {name}. You can manage your todos <Link to="/todos">here</Link>.
      </div>
    </>
  );
};

export default WelcomeComponent;