import React from 'react';
import logo from './assets/animation-group.svg';

function App() {
  return (
    <div className="text-center">
      <header className="bg-white-areatomic-500 flex flex-col text-purple-areatomic-500 items-center justify-center min-h-screen text-3xl">
        <img src={logo} className="pointer-events-none h-full" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="text-blue-areatomic-400"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
