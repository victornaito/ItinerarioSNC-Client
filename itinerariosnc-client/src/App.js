import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from  'axios';

function App() {
  const [user, setUser] = useState('victornaito');

  async function getGitApi() {
    let resp = await axios.get(`https://api.github.com/users/${user}`);
    return 'true';
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {user}
      <button onClick={() => getGitApi() && setUser("victornaito")}>
      Login
      </button>
    </div>
  );
}

export default App;