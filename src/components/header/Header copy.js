import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';


function Header(props) {

    const history = useHistory();

    function handleClick() {
        history.push('/films')
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarCenteredExample"
                        aria-controls="navbarCenteredExample"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-center"
                        id="navbarCenteredExample"
                    >
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li onClick={() => handleClick()} className="nav-item">
                                <NavLink to="/films" className="nav-link" > AlloMovie </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/films" className="nav-link" activeClassName="active"> Accueil </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/favoris" className="nav-link" activeClassName="active"> Favoris </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}


export default Header;