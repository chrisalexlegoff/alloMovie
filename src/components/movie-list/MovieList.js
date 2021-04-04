import React, { Component } from 'react';
import { MovieElement } from '..';

class MovieList extends Component {
    render() {
        return (
            <div className="w-100 d-flex flex-row flex-wrap align-content-start">
               <MovieElement />
               <MovieElement />
               <MovieElement />
               <MovieElement />
               <MovieElement />
               <MovieElement />
               <MovieElement />
               <MovieElement />
               <MovieElement />
               <MovieElement />
               <MovieElement />
               <MovieElement />
               <MovieElement />
               <MovieElement />
               <MovieElement />
               <MovieElement />
            </div>
        );
    }
}

export default MovieList