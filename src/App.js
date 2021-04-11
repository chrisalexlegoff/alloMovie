import { Header } from "./components";
import { Component } from 'react';
import apiMovie, { apiMovieMap } from './conf/api.movie';
import Films from './features/films';
import favoris from "./features/favoris";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      selectedMovie: 0,
      loaded: false,
      favoris: []
    }
  }

  updateSelectedMovie = (index) => {
    this.setState({
      selectedMovie: index
    })
  }

  componentDidMount() {
    apiMovie.get('/discover/movie')
      .then(response => response.data.results)
      .then(apiMovie => {
        const movies = apiMovie.map(apiMovieMap)
        this.updateMovies(movies)
      })
      .catch(err => console.log(err))
  }

  updateMovies = (movies) => {
    this.setState({
      movies,
      loaded: true
    })
  }

  addFavori = (title) => {
    const favorisAjout = this.state.favoris.slice()
    const film = this.state.movies.find( m => m.title === title)
    favorisAjout.push(film)
    this.setState({
      favoris: favorisAjout
    })
  }

  removeFavori = (title) => {
    const favorisSupprime = this.state.favoris.slice()
    const index = this.state.favoris.findIndex(f => f.title === title)
    favorisSupprime.splice(index, 1)
    this.setState({
      favoris: favorisSupprime
    })
  }

  render() {
    return (
      <Router>
        <div className="App d-flex flex-column">
          <Header />
          <Switch>
            <Route path="/films" render={(props) => {
              return (
                <Films
                  { ...props }
                  loaded={this.state.loaded}
                  updateMovies={this.updateMovies}
                  updateSelectedMovie={this.updateSelectedMovie}
                  movies={this.state.movies}
                  selectedMovie={this.state.selectedMovie}
                  addFavori={ this.addFavori }
                  removeFavori={ this.removeFavori }
                  favoris={ this.state.favoris.map( f => f.title) }
                />
              )
            }} />
            <Route path="/favoris" component={favoris} />
            <Redirect to="/films" />
          </Switch>
        </div>
      </Router>

    )
  }
}

export default App;
