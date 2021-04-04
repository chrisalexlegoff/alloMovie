import React, { Component } from 'react';

class MovieElement extends Component {
    render() {
        return (
            <div className="w-25 p-2">
                <div className="card">
                    <img src="https://fr.web.img6.acsta.net/pictures/20/10/02/12/21/3764004.png" alt="Star Wras" className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">Star Wars</h5>
                        <p classname="card-text">La conclusion de la saga Skywalker. De nouvelles légendes vont naître dans cette bataille épique pour la liberté.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieElement;