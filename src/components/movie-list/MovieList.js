import React, { Component } from 'react';
import { MovieElement } from '..';

class MovieList extends Component {
    render() {
        return (
            <div className="w-75 d-flex flex-row flex-wrap align-content-start">
                { this.props.movies.map( (m, index) => (
                    <MovieElement movie={ m } updateSelectedMovie={() => { this.props.updateSelectedMovie(index) }} />
                )) }
            </div>
        );
    }
}

export default MovieList