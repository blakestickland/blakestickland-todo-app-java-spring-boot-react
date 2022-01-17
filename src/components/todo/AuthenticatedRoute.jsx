import React, { Component } from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import AuthenticationService from "./AuthenticationService";

const AuthenticatedRoute = ({ component: Component, ...restOfProps }) => {
    const isAuthenticated = AuthenticationService.isUserLoggedIn();
    console.log("this", isAuthenticated);

    return isAuthenticated ? <Outlet /> : <Navigate to="/login/" />;
}

export default AuthenticatedRoute;