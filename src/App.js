import { Header, MovieList } from "./components";
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
        title: 'The Godfather',
        img: 'https://fr.web.img6.acsta.net/pictures/20/10/02/12/21/3764004.png',
        details: 'R | 175 min | Crime, Drama',
        description: 'La conclusion de la saga Skywalker. De nouvelles légendes vont naître dans cette bataille épique pour la liberté.'
      },
      {
        title: 'The Godfather',
        img: 'https://fr.web.img6.acsta.net/pictures/20/10/02/12/21/3764004.png',
        details: 'R | 175 min | Crime, Drama',
        description: 'La conclusion de la saga Skywalker. De nouvelles légendes vont naître dans cette bataille épique pour la liberté.'
      },
      {
        title: 'The Godfather',
        img: 'https://fr.web.img6.acsta.net/pictures/20/10/02/12/21/3764004.pnghttps://fr.web.img6.acsta.net/pictures/20/10/02/12/21/3764004.pnghttps://fr.web.img6.acsta.net/pictures/20/10/02/12/21/3764004.pnghttps://fr.web.img6.acsta.net/pictures/20/10/02/12/21/3764004.pnghttps://fr.web.img6.acsta.net/pictures/20/10/02/12/21/3764004.png',
        details: 'R | 175 min | Crime, Drama',
        description: 'La conclusion de la saga Skywalker. De nouvelles légendes vont naître dans cette bataille épique pour la liberté.'
      }
    ],
      selectedMovie: 0
    }
  }
  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        <div className="d-flex flex-row flex-fill pt-4 p-2">
          <MovieList />
        </div>
      </div>
    )
  }
}

export default App;
