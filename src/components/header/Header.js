import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';


const TopNav = props => {

    const history = useHistory();
    function handleClick() {
        history.push('/films')
    }

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-ligth ">
            <button onClick={() => handleClick()} className="btn btn-small btn-grey nav-link text-white">
              <NavLink to="/films" classNameName="nav-link" > AlloMovie </NavLink>   
            </button>
                {/* <img src={Logo} alt="Logo" width="36" height="36" classNameName="vertical-align-middle" /> */}
                {/* <span classNameName="">  Allocine </span> */}
            <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
                <button className="btn btn-small btn-grey nav-link text-white">
                    <NavLink to="/films" className="nav-link" activeClassName="active"> Accueil </NavLink>
                </button>
                <button className="btn btn-small btn-grey nav-link text-white">
                    <NavLink to="/favoris" className="nav-link" activeClassName="active"> Favoris </NavLink>
                </button>
                {/* <a href="/request-demo" className="btn btn-sm btn-primary nav-link text-white" >Request demo</a> */}
            </div>
        </nav>
    );
}

export default TopNav;