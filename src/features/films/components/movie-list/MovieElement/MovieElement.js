import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Loading } from '../../../../../components';
import Style from './MovieElement.module.scss';


class MovieElement extends Component {


    mouseOnClick = () => {
        this.props.updateSelectedMovie(this.props.movie.title)

    }

    detailOnClik = (props) => {
        return (
            <>
                { this.props.loaded ? (
                    <Redirect to="/detail" />
                ) : (
                    <Loading />
                )}
            </>
        )
    }

    render() {

        return (
            
            <div onClick={this.mouseOnClick} className={"d-flex flex-row bg-light " + Style.container}>
                <img width="185" src={this.props.movie.img} alt="film" />
                <div className="flex-fill d-flex flex-column p-3">
                    <h5>{this.props.movie.title}</h5>
                    <hr className="w-100"></hr>
                    <p className="flex-fill">{this.props.movie.details}</p>
                    <div className="d-flex flex-row justify-content-end">
                        <Link onClick={() => localStorage.setItem('movie', JSON.stringify(this.props.movie))} className="btn btn-small btn-success mr-4" to="/detail"> Detail </Link> 
                        {this.props.isFavori ? (
                            <button onClick={() => { this.props.removeFavori(this.props.movie.title) }} className="btn btn-small btn-danger"> Supprimer </button>
                        ) : (
                            <button onClick={() => { this.props.addFavori(this.props.movie.title) }} className="btn btn-small btn-primary"> Ajouter </button>
                        )}
                    </div>
                </div>
            </div>

        );
    }
}

export default MovieElement;