import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './Components/SearchBar';
import CharacterTable from './Components/CharacterTable';
import Pagination from './Components/Pagination';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.handlePagination = this.handlePagination.bind(this);
    this.state = {
      characters: [],
      pageURL: "https://swapi.dev/api/people",

    }
  }
  
  componentDidMount() {
    this.getCharacters("https://swapi.dev/api/people")
  }

  getCharacters = URL => {
    axios.get(URL)
    .then(response => {
      let characters = response.data.results
      characters = Promise.all(characters.map(async (character) => {
        character.homeworld = await this.getHomeworld(character.homeworld);
        if (!character.species[0]){
          character.species = "Human"
          } else character.species = await this.getSpecies(character.species[0]);
        return character;
      })); 
      characters.then(characters => {
        this.setState({ characters })
      });
      
      
    })
      .catch(err => console.log(err));


  }

  getHomeworld = async (homeworldURL) => {
      const response = await axios.get(homeworldURL);
      return response.data.name;
  }

  getSpecies = async (speciesURL) => {
    const response = await axios.get(speciesURL);
    return response.data.name;
  }



  handlePagination = (currentPage) => {
    this.getCharacters(`https://swapi.dev/api/people/?page=${currentPage}`)
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className = "text-center">Star Wars API</h1> 
        </header>
        <SearchBar />
        <CharacterTable characters = {this.state.characters} />
        <Pagination changePage = {this.handlePagination} />
      </div>
    );
  }
}

export default App;





