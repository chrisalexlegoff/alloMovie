import React from 'react';
import { MovieList, SearchBar } from './components'
import Loading from '../../components/utils/Loading'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

  return (
    <>
      <SearchBar updateMovies={props.updateMovies} />
      { props.loaded ? (
        <div className="d-flex flex-row flex-fill pt-4 p-2">
          <MovieList 
            movies={props.movies}
            updateSelectedMovie={props.updateSelectedMovie}
            favoris={ props.favoris.map(f => f.title) } 
            removeFavori={ props.removeFavori }
            addFavori={ props.addFavori }
          />
          {/* <MovieDetails
            movie={props.movies[props.selectedMovie]}
          /> */}
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}