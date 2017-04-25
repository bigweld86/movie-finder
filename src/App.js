import React, { Component } from 'react';
import Searchbox from './components/Searchbox'
import Moviearea from './components/Moviearea'
import { Container, Row, Col } from 'reactstrap';
import './App.css';

const DEFAULT_TERM = 'High Fidelity'
const PATH_BASE = 'http://www.omdbapi.com/'
const PARAM_SEARCH_TITLE = 't='

class App extends Component {

  // Constructor
  constructor(props) {
    super(props)

    this.state = {
      movie: null,
      searchTerm: DEFAULT_TERM
    }

    this.onSearchSubmit = this.onSearchSubmit.bind(this)
    this.onSearchChange = this.onSearchChange.bind(this)
    this.findMovie = this.findMovie.bind(this)
    this.setMovieResult = this.setMovieResult.bind(this)
  }

  componentDidMount() {
    const { searchTerm } = this.state
    this.findMovie(searchTerm)
  }

  findMovie(searchTerm) {
    //console.log(`${PATH_BASE}?${PARAM_SEARCH_TITLE}${searchTerm}`)
      fetch(`${PATH_BASE}?${PARAM_SEARCH_TITLE}${searchTerm}`)
        .then(response => response.json())
        .then(result => this.setMovieResult(result))
  }

  setMovieResult(result) {
    console.log(result);
    this.setState({ movie: result })
    console.log(this.state)
  }


  // onSearchSubmit method
  onSearchSubmit(e) {
    e.preventDefault()
    console.log('here')
    console.log("Searching movie with name " + this.state.searchTerm)
    this.findMovie(this.state.searchTerm)
  }

  // onSearchChange method
  onSearchChange(e){
    console.log(e.target.value)
    this.setState({ searchTerm: e.target.value })
  }

  // render method
  render() {

    const { movie, searchTerm } = this.state

    return (
      <div className="App">
      <Container>
        <Row className="search-section" id="search-section">
          <Col xs="12">
            <Searchbox
              value={searchTerm}
              onChange={this.onSearchChange}
              onSubmit={this.onSearchSubmit}
            >Search
            </Searchbox>
          </Col>
        </Row>
      </Container>
      <Moviearea
          movie={movie}
      ></Moviearea>
    </div>
    );
  }
}

export default App;
