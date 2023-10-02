import './gallery.scss';
import Card from '../Card/index';
import logements from "../../assets/data/logements.json";
import { Link } from "react-router-dom";

const Gallery = () => {
    return (
        <div className="gallery">
            {logements.map((logement) => {
                return (
                    <Link to={`/logement/${logement.id}`}>
                        <Card key={logement.id} image={logement.cover} title={logement.title} />
                    </Link>
                );
            })}
        </div>
    )
}

export default Gallery;