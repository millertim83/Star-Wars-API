import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './Components/SearchBar';
import CharacterTable from './Components/CharacterTable';
import axios from 'axios';




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: []
    }
  }

  

  componentDidMount() {
    axios.get('https://swapi.dev/api/people/')
      .then(results => {
        results = results.data.results
        results.forEach(result => {
          let character = {};
          character.name = result.name;
          character.birthDate = result.birth_year;
          character.height = result.height;
          character.mass = result.mass;
          //character.homeworld = getCharacterHomeworld();
          //character.species = getCharacterSpecies(result.species);
          this.setState({ characters: [...this.state.characters, character] })
        });
        })
        .catch(err => console.log(err));
        
  }
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Star Wars API</h1> 
        </header>
        <SearchBar />
        <CharacterTable characters = {this.state.characters} />
      </div>
    );
  }
}

export default App;



