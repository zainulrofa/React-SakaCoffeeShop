import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  state = {
    color: "primary",
  };
  render() {
    return (
      <div className="App">
        <header className={`App-header ${this.state.color}`}>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div
            className="btn"
            onClick={() => {
              this.setState((state) => ({
                color: state.color === "primary" ? "secondary" : "primary",
              }));
            }}
          >
            Change Background
          </div>
        </header>
      </div>
    );
  }
}

export default App;
