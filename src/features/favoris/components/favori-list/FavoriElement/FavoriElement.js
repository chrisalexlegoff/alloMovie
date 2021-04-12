import React from 'react';
import Style from './FavoriElement.module.scss'
import { useHistory } from 'react-router-dom';

function FavoriElement(props) {

    let history = useHistory();

    function handleClick() {
        history.push('/detail');
    }
      
    return (
      
        <div className={"d-flex flex-row bg-light " + Style.container}>
                <img width="185" src={props.favori.img} alt="film" />
                <div className="flex-fill d-flex flex-column p-3">
                    <h5>{props.favori.title}</h5>
                    <hr className="w-100"></hr>
                    <p className="flex-fill">{props.favori.details}</p>
                    <div className="d-flex flex-row justify-content-end">
                        <button style={{fontSize: 'x-small'}} onClick={ () => { props.removeFavori(props.favori.title) } } className="btn btn-small btn-danger"> Retirer des favoris </button>
                    
                        <button style={{fontSize: 'x-small'}} onClick={ () => { handleClick() } } className="btn btn-small btn-success ml-2"> Voir les détails </button>
                    </div>
                </div>
            </div> )
}


export default FavoriElement;