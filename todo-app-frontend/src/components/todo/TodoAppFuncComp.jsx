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

const TodoApp = () =>  {
    return (
      <div className="TodoApp">
        <Router>
            <HeaderComponent />
            <Routes>
                <Route path="/" element={<LoginComponent />} />
                <Route path="/login" element={<LoginComponent />} />
                <Route path="/welcome/:name" element={<AuthenticatedRoute />}>
                <Route path="/welcome/:name" element={<WelcomeComponent />} />
                </Route>
                <Route path="/todos" element={<AuthenticatedRoute />}>
                <Route path="/todos" element={<ListTodosComponent />} />
                </Route>
                <Route path="/logout" element={<AuthenticatedRoute />}>
                    <Route path="/logout" element={<LogoutComponent />} />
                </Route>
                <Route path="*" element={<ErrorComponent />} />
            </Routes>
            <FooterComponent />
        </Router>
      </div>
    );
}

export default TodoApp;
