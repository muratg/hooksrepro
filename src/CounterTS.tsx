import React, { useState } from "react";

const CounterTS = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1> Counter (TS) </h1>
      <p>You clicked {counter} times</p>
      <button onClick={() => setCounter(counter + 1)}>Click me</button>
    </div>
  );
};

export default CounterTS;
