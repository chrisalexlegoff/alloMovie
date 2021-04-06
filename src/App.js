import { Header, MovieDetails, MovieList, Loading } from "./components";
import { Component } from 'react';
import dataMovies from "./components/dataMovies";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      selectedMovie: 0
    }

    setTimeout(() => {
      this.setState({
        movies: dataMovies,
        loaded: true
      })
    }, 2000)
  }

  updateSelectedMovie = (index) => {
    this.setState({
      selectedMovie: index
    })
  }

  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />

        { this.state.loaded ? (
          <div className="d-flex flex-row flex-fill pt-4 p-2">
            <MovieList movies={this.state.movies} updateSelectedMovie={this.updateSelectedMovie} />
            <MovieDetails movie={this.state.movies[this.state.selectedMovie]} />
          </div>
        ) : (
         <Loading />
        )}
      </div>
    )
  }
}

export default App;
