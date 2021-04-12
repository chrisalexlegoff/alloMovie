import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="navbar navbar-expand-lg navbar-light bg-light">
               <a className="navbar-brand" href="/">AlloMovie</a>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapse">
                   <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <NavLink to="/films" className="nav-link" activeClassName="active"> Accueil </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/favoris" className="nav-link" activeClassName="active"> Favoris </NavLink>
                        </li>
                    </ul>
               </div>
            </header>
        );
    }
}

export default Header;