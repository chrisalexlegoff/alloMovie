import React, { Component } from 'react';

class MovieElement extends Component {
    render() {
        return (
            <div className="w-50 p-2">
                <div className="border d-flex">
                    <img width="150" height="200" src="https://fr.web.img6.acsta.net/pictures/20/10/02/12/21/3764004.png" alt="Star Wras" />
                    <div className="flex-fill d-flex flex-column p-3">
                        <h5>Star Wars</h5>
                        <hr className="w-100"></hr>
                        <p>La conclusion de la saga Skywalker. De nouvelles légendes vont naître dans cette bataille épique pour la liberté.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieElement;