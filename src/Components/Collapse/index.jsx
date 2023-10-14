import './collapse.scss';
import { useState } from "react";
import arrow from '../../assets/images/arrow-up.svg';

//Composant Collapse appelé sur la page à propos et sur la page FicheLogement

const Collapse = (props) => {
    const [toggle, setToggle] = useState(false); //Déclaration de l'état du collapse
    const toggleState = () => { //Fonction qui modifie l'état du collapse avec un toggle pour faire pasaser de false à true et inversement.
		setToggle(!toggle);
	};

    return(
        <div className="collapse">
            <div className="collapse__top">
                <h2 className={`collapse__top__title ${props.class}`}>{props.title}</h2>
                <img
                    className={`collapse__top__arrow ${toggle ? 'arrow-down' : ''}`} //Application d'une autre classe en fonction si le toggle est true pour les besoins de l'animation.
                    src={arrow}
                    alt="flèche"
                    onClick={toggleState} //On appelle la fonction toggleState en cliquant sur la flèche
                />
            </div>
            <div className={`collapse__bottom ${toggle ? 'bottom-down' : ''}`}> 
                <div className={`collapse__bottom__text ${toggle ? 'text-down' : ''}`}>{props.text}</div>
            </div>
        </div>
    );
    
};

export default Collapse;