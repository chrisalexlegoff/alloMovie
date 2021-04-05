import { Header, MovieDetails, MovieList } from "./components";
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
        title: 'The Godfather',
        img: 'https://fr.web.img6.acsta.net/pictures/20/10/02/12/21/3764004.png',
        details: 'R | 175 min | Crime, Drama',
        description: 'La conclusion de la saga Skywalker. De nouvelles légendes vont naître dans cette bataille épique pour la liberté.'
      },
      {
        title: 'The Godfather 2',
        img: 'https://img.planete-starwars.com/upload/databank/78892-jedi-fallen-order.jpg',
        details: 'R | 175 min | Crime, Drama',
        description: 'La conclusion de la saga Skywalker. De nouvelles légendes vont naître dans cette bataille épique pour la liberté.'
      },
      {
        title: 'The Godfather 3',
        img: 'https://www.bebegavroche.com/media/catalog/product/cache/1/thumbnail/1200x/040ec09b1e35df139433887a97daa66f/t/t/tt037_mini-figurines-en-carton-de-table-starwars-nouveaux-heros-pour-anniversaire.jpg',
        details: 'R | 175 min | Crime, Drama',
        description: 'La conclusion de la saga Skywalker. De nouvelles légendes vont naître dans cette bataille épique pour la liberté.'
      },
      {
        title: 'The Godfather 4',
        img: 'https://static.posters.cz/image/750/affiches-et-posters/star-wars-l-ascension-de-skywalker-galactic-encounter-i81806.jpg',
        details: 'R | 175 min | Crime, Drama',
        description: 'La conclusion de la saga Skywalker. De nouvelles légendes vont naître dans cette bataille épique pour la liberté.'
      }
    ],
      selectedMovie: 0
    }
  }

  updateSelectedMovie = (title) => {
    const index = this.state.movies.findIndex((m) => {
      return title === m.title
    })
    this.setState({
      selectedMovie: index
    })
  }

  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        <div className="d-flex flex-row flex-fill pt-4 p-2">
          <MovieList movies={this.state.movies} updateSelectedMovie={this.updateSelectedMovie} />
          <MovieDetails movie={this.state.movies[this.state.selectedMovie]} />
        </div>
      </div>
    )
  }
}

export default App;
