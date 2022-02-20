import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthenticationService from "./AuthenticationService";

const AuthenticatedRoute = (props) => {
    const isAuthenticated = AuthenticationService.isUserLoggedIn();
    console.log("this", isAuthenticated);

    // return isAuthenticated ? 
    //   { ...this.props.children }
    //  : (
    //   <Navigate to="/login/" />
    // );
    return isAuthenticated ? <Outlet /> : <Navigate to="/login/" />;
}

export default AuthenticatedRoute;