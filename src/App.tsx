import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { saveUser } from "user-service";

function App() {
  const [user, setUser] = useState({
    name: "",
    address: "",
    telephone: "",
    payment: {
      creditCardNumber: "",
      vcd: "",
      expirationDate: "",
      cardName: ""
    }
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
      <form onSubmit={()=> saveUser(user)}>
        <p>Your data:</p>
        <input type="text" placeholder="name" onChange={e => setUser({...user, name: e.target.value })}  />
        <input type="text" placeholder="address" onChange={e => setUser({...user, address: e.target.value })}  />
        <input type="tel" placeholder="telephone" onChange={e => setUser({...user, telephone: e.target.value })}  />
        <p>Payment: </p>

        <button type="submit">Save info</button>
      </form>
    </div>
  );
}

export default App;
