import './fiche.scss';
import Carrousel from '../../Components/Carrousel';
import DataLogements from '../../assets/data/logements.json';
import { useParams, Navigate } from "react-router-dom";

const FicheLogement = () => {
    const { id } = useParams();
    const ficheLogement = DataLogements.find((logement) => logement.id === id);

    if (!ficheLogement) {
        return <Navigate to="/error" />;
    }

    return(
        <div className="fiche">
            <Carrousel slides={ficheLogement?.pictures} />
        </div>
    )
};

export default FicheLogement;