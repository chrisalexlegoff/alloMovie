import React from 'react';
import FavoriElement from './FavoriElement/FavoriElement';
import Sorry from '../../../../asset/sorry.jpg';
import { useHistory } from 'react-router-dom';


function FavoriList(props) {

    let history = useHistory();

    function handleClick() {
        history.goBack();
    }
      console.log(props.favoris.length)
    return (
      
        <>
                <div className="d-flex flex-column align-items-center">
                    <button className="w-25 btn btn-small btn-primary mb-4" onClick={ () => handleClick() }> Retour </button>
                
        
        { props.favoris.length > 0 ? (
           
                <div className="d-flex flex-row flex-wrap justify-content-center">
            { props.favoris.map( (f, index) => (
                <FavoriElement 
                key={ f.title + index }
                favori={ f } 
                removeFavori={ props.removeFavori }
                />
            )) }
        </div>
            
        
    ) : (
        <div className="w-100 d-flex flex-row flex-wrap justify-content-center">
            <h1>Vous n'avez pas encore ajouté de film dans vos favoris</h1>
            <div ><img src={Sorry} alt="sorry"/></div>
            
        </div>
        
    ) }</div>
        </>
    )
}




export default FavoriList