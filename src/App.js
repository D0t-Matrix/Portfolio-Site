import React, { useState } from 'react';
import Button from './button.js';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="">
      <h1>Counter: {counter}!</h1>
      <button className="Button" onClick={() => {setCounter(counter - 1) }}>Decrease</button>
      <button className="Button" onClick={() => {setCounter(counter + 1) }}>Increase</button>
      <Button counter={counter} setCounter={setCounter}/>
    </div>




    /*<div className="App">
      <header className="App-header">
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
      </header>
    </div>*/

  );
}

function Foo() {
  return (
    <h1>Bar</h1>
  );
}

export default App;
