import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './Components/SearchBar';
import CharacterTable from './Components/CharacterTable';
import Pagination from './Components/Pagination';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.handlePagination=this.handlePagination.bind(this);
    this.state = {
      characters: [],
      pageURL: "https://swapi.dev/api/people",
      pageNumber: "1"
    }
  }

  handlePagination = (currentPage) => {
    this.setState({pageNumber: currentPage});
    this.setState({pageURL: `https://swapi.dev/api/people/?page="${pageNumber}`});  
  }

  componentDidMount() {
    axios.get(this.state.pageURL)
      .then(results => {
        results = results.data.results
        results.forEach(result => {
          let character = {};
          character.name = result.name;
          character.birthDate = result.birth_year;
          character.height = result.height;
          character.mass = result.mass;
          character.homeworld = getHomeworld();
          character.species = getSpecies();

          function getHomeworld() {
            let planetURL = result.homeworld;
            axios.get(planetURL)
              .then(response => {
                character.homeworld = response.data.name;
              }); return character.homeworld;
          }
          function getSpecies() {
            let speciesURL = result.species[0];
              if (!speciesURL) {
                return 'Human';
                } else axios.get(speciesURL)
                  .then(response => {
                    character.species = response.data.name;
                    }); return character.species;
          }
            
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
        <Pagination changePage = {this.handlePagination} />
      </div>
    );
  }
}

export default App;



/*



*/

