import { ErrorSearch, Header, Loading } from "./components";
import { Component } from 'react';
import apiMovie, { apiMovieMap } from './conf/api.movie';
import Films from './features/films';
import Favoris from './features/favoris';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import apiFirebase from "./conf/api.firebase";
import { MovieDetails } from "./features/films/components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      selectedMovie: 0,
      loaded: false,
      favoris: null
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
        console.log({movies});
      })
      .catch(err => console.log(err))
    apiFirebase.get('favoris.json')
               .then( response => {
                  let favoris = response.data ? response.data : [];
                  this.updateFavoris(favoris)
                })
                
  }

  updateMovies = (movies) => {
    this.setState({
      movies,
      loaded: this.state.favoris ? true : false
    })
  }

  updateFavoris = (favoris) => {
    this.setState({
      favoris,
      loaded: this.state.movies ? true : false
    })
  }

  addFavori = (title) => {
    const favorisAjout = [ ...this.state.favoris ]
    const film = this.state.movies.find( m => m.title === title)
    favorisAjout.push(film)
    this.setState({
      favoris: favorisAjout
    }, () => {
      this.saveFavoris()
    })
  }
  
  removeFavori = (title) => {
    const favorisSupprime = [ ...this.state.favoris ]
    const index = this.state.favoris.findIndex(f => f.title === title)
    favorisSupprime.splice(index, 1)
    this.setState({
      favoris: favorisSupprime
    }, () => {
      this.saveFavoris()
    })
  }
  
  saveFavoris = () => {
    apiFirebase.put('favoris.json', this.state.favoris)
  }

  render() {
    const moviesHistory = this.state.movies
    return (
      <Router>
        <div className="App d-flex flex-column">
          <Header moviesHistory={ moviesHistory }
                  updateMovies={this.updateMovies}
                  movies={this.state.movies}
                  />
          <Switch>
            <Route path="/Error404" render={(props) => {
              return (
                <ErrorSearch
                  { ...props }
                />
              )
            }} />
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
                  favoris={ this.state.favoris }
                />
              )
            }} />
            <Route path="/favoris" render={ (props) => {
              return(
                <Favoris
                  { ...props }
                  loaded={this.state.loaded}
                  favoris={ this.state.favoris }
                  removeFavori={ this.removeFavori }
                />                
              )
            }} />
            <Route path="/detail" render={ (props) => { 
              return(
                 
                this.state.loaded ? (
                
                <MovieDetails
                    { ...props }
                    loaded={ this.state.loaded }
                    movie={this.state.movies[this.state.selectedMovie]}
                    movies={ this.state.movies }
                    index={ this.state.selectedMovie }
                    updateSelectedMovie={ this.updateSelectedMovie }
                    addFavori={ this.addFavori }
                    removeFavori={ this.removeFavori }
                    favoris={ this.state.favoris }
                  /> 
                  ) : (
                    <Loading />
                )) }}
                  
              
            />
            <Redirect to="/films" />
          </Switch>
        </div>
      </Router>

    )
  }
}

export default App;
