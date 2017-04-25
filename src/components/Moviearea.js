import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Input } from 'reactstrap'

class Moviearea extends Component {

  // constructor(props) {
  //   super(props)
  // }

  getRatings(ratings) {
    return (
      <Container>
        <Row className="ratings-title-row">
          <Col xs="12"><h3 className="movie-ratings-header">Ratings</h3></Col>
        </Row>
        <Row className="ratings-area">
          {
            ratings.map( (rating, i) => (
              <Col xs="12" sm="4" className="test" key={i}>
                <span>{rating.Source}</span><br/>
                <span>{rating.Value}</span>
              </Col>
            ))
          }
        </Row>
      </Container>
    )
  }

  // render method
  render() {
    const { movie } = this.props

    // if object's empty then render nothing
    if (movie == null) {
      return (
        <div></div>
      )
    }

    // if error detected then render error area
    if (movie && movie.Response === "False") {
      return (
        <Container>
          <Row className="not-found-row">
            <Col xs="24" className="not-found-row">
              <span className="not-found">
                Oops... { movie.Error }
              </span>
            </Col>
          </Row>
        </Container>
      )
    }

    // if no errors then render movie data
    return (
      <div className="movie-content-area" id="movie-content-area">
        <Container className="movie-content-top">
          <Row>
              <Col xs="12" sm="5">
                <Row>
                  <Col className="poster-col">
                    <img
                      className="movie-poster"
                      src={movie.Poster}
                      alt={movie.Title}
                    />
                  </Col>
                </Row>
              </Col>
              <Col className="general-info-area" xs="12" sm="7">
                <Row>
                  <Col xs="12" className="movie-title-col">
                    <h2 className="movie-title">{movie.Title} ({movie.Year})</h2>
                  </Col>
                </Row>
                <Row>
                  <Col xs="6"><div className="desc-elem movie-rated">Rated: {movie.Rated}</div></Col>
                  <Col xs="6"><div className="desc-elem movie-runtime">Runtime: {movie.Runtime}</div></Col>
                  <Col xs="12"><div className="desc-elem movie-released">Released: {movie.Released}</div></Col>
                  <Col xs="12"><div className="desc-elem movie-director">Director: {movie.Director}</div></Col>
                  <Col xs="12"><div className="desc-elem movie-actors">Actors: {movie.Actors}</div></Col>
                  <Col xs="12"><div className="desc-elem movie-genre">Genre: {movie.Genre}</div></Col>
                </Row>
              </Col>
            </Row>
        </Container>

        <Row className="plot-row">
          <Container>
            <Col xs="12"><h3 className="movie-plot-header">Plot</h3></Col>
            <Col xs="12"><div className="movie-plot-content">{movie.Plot}</div></Col>
          </Container>
        </Row>

        {
          // if object contains ratings then render them
          movie.Ratings && this.getRatings(movie.Ratings)
        }

      </div>
    )

  }
}

export default Moviearea
