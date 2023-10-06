import React from "react";
import { NavLink } from "react-router-dom";
import './nav.scss';

const Navigation = () => {
    return (
         <nav className="navigation">
            <NavLink to="/" exact="true" className="navigation--home">Accueil</NavLink>
            <NavLink to="/about" exact="true" className="navigation--about">À propos</NavLink>
        </nav>
    )
};

export default Navigation;