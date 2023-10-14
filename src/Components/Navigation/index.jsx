import React from "react";
import { NavLink } from "react-router-dom";
import './nav.scss';

//Composant Navigation appelé dans le composant Header. 
//Ici on utilise NavLink et nas Link car cela permettait de garder le lien de navigation souligné en fonction de la page active.

const Navigation = () => {
    return (
         <nav className="navigation">
            <NavLink to="/" exact="true" className="navigation--home">Accueil</NavLink>
            <NavLink to="/about" exact="true" className="navigation--about">À propos</NavLink>
        </nav>
    )
};

export default Navigation;