import React from "react";
import "./App.css";
import CounterTS from "./CounterTS";

const CounterClass = require("./counterClass").counter;
const CounterHooks = require("./counterHooks").mkCounter();

const App: React.FC = () => {
  return (
    <div className="App">
      <CounterTS />
      <hr />
      <CounterClass />
      <hr />
      <CounterHooks />
    </div>
  );
};

export default App;
