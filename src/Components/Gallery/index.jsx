import './gallery.scss';
import Card from '../Card/index';
import logements from "../../assets/data/logements.json";
import { Link } from "react-router-dom";

//Composant gallery appelé dans la page d'accueil.

const Gallery = () => {
    return (
        <div className="gallery">
            {logements.map((logement) => {
                return ( //On map les logements pour itérer sur chacun et appeler une Card qui lui correspond, qui est aussi un lien vers la page qui lui correspond.
                    <Link key={logement.id} to={`/logement/${logement.id}`}>
                        <Card image={logement.cover} title={logement.title} />
                    </Link>
                );
            })}
        </div>
    )
}

export default Gallery;