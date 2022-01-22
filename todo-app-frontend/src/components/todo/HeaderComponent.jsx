import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthenticationService from "./AuthenticationService.js";


const HeaderComponent = () => {
  const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
  // console.log("isUserLoggedIn : ", isUserLoggedIn);

  return (
    <header>
      <nav className="navbar navbar-expand-md navvbar-dark bg-dark">
        <div>
          <a
            href="https://blakestickland.github.io/portfolio-web-dev/"
            className="navbar-brand text-secondary"
          >
            BlakeStickland
          </a>
        </div>
        <ul className="navbar-nav">
          {isUserLoggedIn && (
            <li>
              <Link className="nav-link link-light" to="/welcome/blakelists">
                Home
              </Link>
            </li>
          )}
          {isUserLoggedIn && (
            <li>
              <Link className="nav-link link-light" to="/todos">
                Todos
              </Link>
            </li>
          )}
        </ul>
        <ul className="navbar-nav navbar-collapse justify-content-end">
          {!isUserLoggedIn && (
            <li>
              <Link className="nav-link link-light" to="/login">
                Login
              </Link>
            </li>
          )}
          {isUserLoggedIn && (
            <li>
              <Link
                className="nav-link link-light"
                to="/logout"
                onClick={AuthenticationService.logout}
              >
                Logout
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const history = useNavigate();

    return (
      <Component history={history} {...props} />
    );
  };

  return Wrapper;
};

export default withRouter(HeaderComponent);