import './fiche.scss';
import Carrousel from '../../Components/Carrousel';
import DataLogements from '../../assets/data/logements.json';
import { useParams, Navigate } from "react-router-dom";
import Collapse from '../../Components/Collapse';
import Host from '../../Components/Host';


const FicheLogement = () => {
    const { id } = useParams();
    const ficheLogement = DataLogements.find((logement) => logement.id === id);
    

    if (!ficheLogement) {
        return <Navigate to="/error" />;
    }

    return(
        <div className="fiche">
            <Carrousel slides={ficheLogement?.pictures} />
            <section className="fiche__details">
                <div className="infos">
                    <div className="infos__lieu">
                        <h1 className="infos__lieu__title">Un très très beau titre</h1>
                        <p className="infos__lieu__location">Un super endroit</p>
                        <div className="infos__lieu__tags">
                            <p className="tag">tag1</p>
                            <p className="tag">tag2</p>
                            <p className="tag">tag2</p>
                        </div>
                    </div>
                    <div className="infos__bonus">
                        <div className="infos__bonus--1">
                        <Host
                            name={ficheLogement?.host.name}
                            picture={ficheLogement?.host.picture}
                        />
                        </div>
                        <p className="infos__bonus--2">Notation du bien de ce riche</p>
                    </div>
                </div>
                <div className="collapses">
                    <Collapse />
                    <Collapse />
                </div>
            </section>
        </div>
    )
};

export default FicheLogement;