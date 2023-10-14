import './fiche.scss';
import Carrousel from '../../Components/Carrousel';
import DataLogements from '../../assets/data/logements.json';
import { useParams, Navigate } from "react-router-dom";
import Collapse from '../../Components/Collapse';
import Host from '../../Components/Host';
import Rate from '../../Components/Rate';

// Fiche logement

const FicheLogement = () => {
    const { id } = useParams(); //On récupère l'id de l'appartement en paramètre de l'URL
    const ficheLogement = DataLogements.find((logement) => logement.id === id);

    const listeEquipements = ficheLogement?.equipments.map((equipment, i) => {
        //Fonction qui nous retourne spécifiquement la liste des équipements d'un appartement donné.
        return (
          <ul className="equiplist" key={i}>
            <li className="equiplist__line">{equipment}</li>
          </ul>
        );
      });
    

    if (!ficheLogement) { //Condition amenant à la page 404 en cas d'id inexistant ou erroné. 
        return <Navigate to="/error" />;
    }

    return(
        <div className="fiche">
            <Carrousel slides={ficheLogement?.pictures} />
            <section className="fiche__details">
                <div className="infos">
                    <div className="infos__lieu">
                        <h1 className="infos__lieu__title">{ficheLogement?.title}</h1>
                        <p className="infos__lieu__location">{ficheLogement?.location}</p>
                        <div className="infos__lieu__tags">
                            {/* Ici on map la catégorie tags du tableau ficheLogement pour afficher chaque tag présent dans la liste*/}
                            {ficheLogement?.tags.map((tag, index) => (
                                    <p key={index} className="tag">{tag}</p>
                            ))}
                        </div>
                    </div>
                    <div className="infos__bonus">
                        <Host
                            name={ficheLogement?.host.name}
                            picture={ficheLogement?.host.picture}
                        />
                        <Rate rating={ficheLogement?.rating}/>
                    </div>
                </div>
                <div className="collapses">
                    {/* Ici on ne map pas pour l'élément Collapse car il y en a forcément deux. Ils sont dont appelés de base avec les props appropriés. */}
                    <Collapse 
                        title="Description"
                        text={ficheLogement?.description}
                        class="medium"
                    />
                    <Collapse 
                        title="Équipements"
                        text={listeEquipements}
                        class="medium"
                    />
                </div>
            </section>
        </div>
    )
};

export default FicheLogement;