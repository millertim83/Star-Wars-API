import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './Components/SearchBar';
import CharacterTable from './Components/CharacterTable';
import Pagination from './Components/Pagination';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      searchTerm: ""
    };

    this.handlePagination = this.handlePagination.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getCharacters = this.getCharacters.bind(this);
    this.getHomeworld = this.getHomeworld.bind(this);
    this.getSpecies = this.getSpecies.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }
  
  componentDidMount() {
    const characterURL = "https://swapi.dev/api/people/?page=1"
    this.getCharacters(characterURL);
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({
      searchTerm: value
    });
  }

  getCharacters = URL => {
    axios.get(URL)
    .then(response => {
      let characters = response.data.results
      characters = Promise.all(characters.map(async (character) => {
        character.homeworld = await this.getHomeworld(character.homeworld);
        if (!character.species[0]) {
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
    this.getCharacters(`https://swapi.dev/api/people/?page=${currentPage}`);
    this.setState({searchTerm: ""});
  }

  handleSearch = (e) => {
    e.preventDefault();
    const search = this.state.searchTerm;
    const searchURL = `https://swapi.dev/api/people/?search=${search}`
    this.getCharacters(searchURL);
  }

  clearSearch = (e) => {
    this.setState({searchTerm: ""});
    const characterURL = "https://swapi.dev/api/people/?page=1"
    this.getCharacters(characterURL);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className = "text-center">Star Wars API</h1> 
        </header>
        <SearchBar 
          handleSearch = {this.handleSearch} 
          handleChange = {this.handleChange}
          searchTerm = {this.state.searchTerm}
          clearSearch = {this.clearSearch}
        />
        <CharacterTable 
        characters = {this.state.characters} 
        />
        <Pagination 
        changePage = {this.handlePagination} 
        />
      </div>
    );
  }
}

export default App;





