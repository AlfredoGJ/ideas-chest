import React from 'react';
import logo from './logo.svg';
import './App.css';
import Idea from './components/idea/Idea'
import {Router, Route} from 'react-router'

const MyComponent = () => {
  return (
    <div className="App">
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
    </div>
  )
}


function App() {
  return (
   
   <Idea>

   </Idea> 
  );
}


export default App;
