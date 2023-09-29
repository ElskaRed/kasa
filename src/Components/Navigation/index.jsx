import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="navigation">
            <Link to="/" className="navigation--home">Accueil</Link>
            <Link to="/about" className="navigation--about">À propos</Link>
        </nav>
    )
};

export default Navigation;