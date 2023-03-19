import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {

  function testConnection() {
    axios.get('http://localhost:3000/api/test')
    .then(response => {
      console.log('Connection success:', response.data)
    })
    .catch(error => {
      console.error('Connection failed:', error)
    })
  }
  return (
    <div className="App">
      <button onClick={testConnection}>Test Connection</button>
    </div>
  );
}

export default App;
