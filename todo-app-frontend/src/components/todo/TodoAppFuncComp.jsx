import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AuthenticatedRoute from "./AuthenticatedRoute.jsx";
import ListTodosComponent from "./ListTodosComponent.jsx";
import LoginComponent from "./LoginComponent.jsx";
import LogoutComponent from "./LogoutComponent.jsx"; 
import HeaderComponent from "./HeaderComponent.jsx";
import FooterComponent from "./FooterComponent.jsx";
import WelcomeComponent from "./WelcomeComponent.jsx";
import ErrorComponent from "./ErrorComponent.jsx";
import TodoComponent from "./TodoComponent.jsx";

import withNavigation from "./withNavigation";
import withParams from "./withParams";

const TodoApp = () =>  {
    const LoginComponentWithNavigation = withNavigation(LoginComponent);
    const WelcomeComponentWithParams = withParams(WelcomeComponent);
    const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
    const ListTodosComponentWithNavigation = withNavigation(ListTodosComponent);
    const TodoComponentWithParamsAndNavigation = withParams(
      withNavigation(TodoComponent)
    );

    return (
      <div className="TodoApp">
        <Router>
          <HeaderComponentWithNavigation />
          <Routes>
            <Route path="/" element={<LoginComponentWithNavigation />} />
            <Route path="/login" element={<LoginComponentWithNavigation />} />
            <Route element={<AuthenticatedRoute />}>
              <Route
                path="/welcome/:name"
                element={
                  // <AuthenticatedRoute>
                    <WelcomeComponentWithParams />
                  // </AuthenticatedRoute>
                }
              />
              <Route
                path="/todos/:id"
                element={
                  // <AuthenticatedRoute>
                    <TodoComponentWithParamsAndNavigation />
                  // </AuthenticatedRoute>
                }
              />
              <Route
                path="/todos"
                element={
                  // <AuthenticatedRoute>
                    <ListTodosComponentWithNavigation />
                  // </AuthenticatedRoute>
                }
              />
              <Route
                path="/logout"
                element={
                  // <AuthenticatedRoute>
                    <LogoutComponent />
                  // </AuthenticatedRoute>
                }
              />
            </Route>
            <Route path="*" element={<ErrorComponent />} />
          </Routes>
          <FooterComponent />
        </Router>
      </div>
    );
}

export default TodoApp;
