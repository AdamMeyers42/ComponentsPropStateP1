import React, { Component } from 'react';
import DisplayName from './components/DisplayName';
import NamesList from './components/NamesList';


function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1><DisplayName></DisplayName></h1>
          <h2><NamesList></NamesList></h2>
        </header>
      </div>
    );
  }
  
  export default App;
  