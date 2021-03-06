import React, { Component } from "react";
import "./Counter.css";
import PropTypes from "prop-types";

class Counter extends Component {
  constructor() {
    super(); // Error #1 -- forgetting to call super() before defining state.

    this.state = {
      counter: 0
    }

    this.increment = this.increment.bind(this); 
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  render() {
    return (
        <div className="counter">
            <CounterButton
            incrementMethod={this.increment}
            decrementMethod={this.decrement}
            />
            <CounterButton
            by={5}
            incrementMethod={this.increment}
            decrementMethod={this.decrement}
            />
            <CounterButton
            by={10}
            incrementMethod={this.increment}
            decrementMethod={this.decrement}
            />
            <span className="count">{this.state.counter}</span>
            <div><button className="reset" onClick={this.reset}>Reset</button></div>
        </div>
    );
  }

  reset() {
    this.setState(() => {
        return { counter: 0 };
    });
   
  }

  increment(by) {
      console.log(`increment from the child : ${by}`)
    this.setState(
        (prevState) => {
            return {counter: prevState.counter + by}
        }
    );
  }
  decrement(by) {
      console.log(`decrement from the child : ${by}`);
    this.setState(
        (prevState) => {
            return {counter: prevState.counter - by}
        }
    );
  }
}

class CounterButton extends Component {

    // Define the initial state in a constructor.
    // state => counter 0
    constructor() {
        super();    // Error #1 -- forgetting to call super() before defining state.
    }

    render() {
        return (
          <div className="counter">
            <button onClick={() => {this.props.decrementMethod(this.props.by)}}>-{this.props.by}</button>
            <button onClick={() => {this.props.incrementMethod(this.props.by)}}>+{this.props.by}</button>
          </div>
        );
    }
}

CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
    by : PropTypes.number
}

export default Counter;
