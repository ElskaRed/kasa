import './carrousel.scss';
import { useState } from "react";
import previous from "../../assets/images/arrow-left.svg";
import next from "../../assets/images/arrow-right.svg";

// Composant Carrousel, appelé dans la page FicheLogement.

const Carrousel = ({ slides }) => {
    const [current, setCurrent] = useState(0); //Utilisation de useState pour gérer les changements d'images du carrousel
    const length = slides.length; //Récupération du nombre de slides pour un appartement donné

    const nextSlide = () => { //Fonction qui passe à la slide suivante et qui boucle si on arrive à la dernière
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const previousSlide = () => { //Fonction qui passe à la slide précédente et qui boucle si on arrive à la première
		setCurrent(current === 0 ? length - 1 : current - 1);
        
	};

    return(
        <section className="carrousel">
            
            {length > 1 && ( //Les flèches ne s'affichent que s'il y a plusieurs slides
                <img
                    src={previous}
                    alt="flèche gauche"
                    onClick={previousSlide} //On appelle la fonction previousSlide au clic sur la flèche de gauche
                    className="carrousel__right-arrow"
                />
            )}

            {length > 1 && (
                <img
                    src={next}
                    alt="flèche droite"
                    onClick={nextSlide} //On appelle la fonction nextSlide au clic sur la flèche de droite
                    className="carrousel__left-arrow"
                />
            )}

            {slides.map((slide, index) => { //On map les slides pour attribuer une key à chacune et l'afficher en fonction du state (current)
                return (
                    <div
                        key={index}
                        className={index === current ? "slider displayed" : "slider"}
                    >
                        {index === current && (
                        <img src={slide} alt="logement à louer" className="slider__photo" />
                        )}

                        {index === current && length > 1 && ( //On affiche un compteur de slide (uniquement s'il y a plusieurs slides)
                        <span className="slider__tracker">
                            {current + 1}/{length}
                        </span>
                        )}
                </div>
                );
            })}
        </section>
    )
}

export default Carrousel;