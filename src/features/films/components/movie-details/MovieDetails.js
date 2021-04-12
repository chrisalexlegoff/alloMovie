import React from 'react';
import { useHistory } from 'react-router-dom';


function MovieDetails(props) {

    let history = useHistory();

    function handleClick() {
        history.push("/home");
    }
    const movie = JSON.parse(localStorage.getItem('movie'))
    const favoris = props.favoris.map(f =>
        f.title)
    const isFavori = (favoris[0] === movie.title)
    console.log(isFavori);
    console.log(favoris);
    console.log(movie.title);
    return (

        <div className="m-auto d-flex flex-column bg-light">
            <div className="d-flex flex-column p-4"><h5>{movie.title}</h5></div>
            <img className="mx-auto d-block mx-auto" src={movie.img} alt="" />
            <div className="flex-fill d-flex flex-column p-3"><div className="d-flex flex-row justify-content-end">
            { isFavori ? (
                            <button style={{fontSize: 'x-small'}} onClick={() => { props.removeFavori(movie.title) }} className="btn btn-small btn-danger"> Retirer des favoris </button>
                        ) : (
                            <button style={{fontSize: 'x-small'}} onClick={() => { props.addFavori(movie.title) }} className="btn btn-small btn-primary"> Ajouter aux favoris </button>
                        )}
                <div className="d-flex flex-row justify-content-end ml-3"></div>
                    <button  style={{fontSize: 'x-small'}} onClick={() => handleClick()} className="btn btn-small btn-success mr-4"> Retour </button>
                </div>
                <hr className="w-100" />
                <p className="flex-fill">{movie.details}</p>
                <p className="flex-fill">{movie.description}</p>    
            </div> 
        </div>
    );
}

export default MovieDetails;