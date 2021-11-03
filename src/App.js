import React from 'react';
import DisplayName from './components/DisplayName';
import NamesList from './components/NamesList';
import AlertUser from './components/AlertUser';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1><DisplayName></DisplayName></h1>
          <h2><NamesList></NamesList></h2>
          <h3><AlertUser></AlertUser></h3>
        </header>
      </div>
    );
  }
  
  export default App;
  