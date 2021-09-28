import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './Components/SearchBar';
import CharacterTable from './Components/CharacterTable';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Star Wars API</h1> 
      </header>
      <SearchBar />
      <CharacterTable />
      
    
    </div>
  );
}

export default App;

/*componentDidMount() {
  axios.get('https://swapi.dev/api')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  })
}*/


 
