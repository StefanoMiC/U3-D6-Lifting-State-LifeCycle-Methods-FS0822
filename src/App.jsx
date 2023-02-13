import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
// import logo from './logo.svg';
import "./App.css";

import { Container, Row, Col, Form } from "react-bootstrap";
import MovieCard from "./components/MovieCard";

class App extends Component {
  state = {
    movieTitle: "Iron Man"
  };

  render() {
    console.log("APP render()");
    return (
      <div className="App">
        <Container>
          <Row className="justify-content-center mt-5">
            <Col xs={12} md={4}>
              <Form.Label>Scegli un film</Form.Label>
              <Form.Select
                aria-label="Default select example"
                //è un "Controlled Component" in quanto legge e modifica lo stato al change della select
                value={this.state.movieTitle}
                onChange={e => this.setState({ movieTitle: e.target.value })}
              >
                <option>Iron Man</option>
                <option>Black Panther</option>
                <option>Doctor Strange</option>
                <option>The Batman</option>
                <option>Spiderman</option>
                <option>Black Widow</option>
                <option>Wonder Woman</option>
              </Form.Select>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3">
            <Col xs={12} md={4}>
              {/* ad ogni cambio di stato "movieTitle" si modifica il valore della prop di MovieCard che ne scatena una nuova fase di update */}
              <MovieCard movieTitle={this.state.movieTitle} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
