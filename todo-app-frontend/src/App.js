import React, { Component } from "react";
import TodoAppFuncComp from "./components/todo/TodoAppFuncComp";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoAppFuncComp />
      </div>
    );
  }
}

export default App;
