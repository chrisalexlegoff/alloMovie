import React, { Component } from 'react';

class MovieElement extends Component {

    mouseEnter = () => {
        this.props.updateSelectedMovie(this.props.movie.title)
    }

    render() {
        return (
            <div onMouseEnter={this.mouseEnter} className="w-50 p-2">
                <div className="border d-flex">
                    <img width="150" height="200" src={this.props.movie.img} alt="" />
                    <div className="flex-fill d-flex flex-column p-3">
                        <h5>{this.props.movie.title}</h5>
                        <hr className="w-100"></hr>
                        <span>{this.props.movie.details}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieElement;