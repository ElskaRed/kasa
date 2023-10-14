import './host.scss';

//Composant Host appelé dans la page FicheLogement.

const Host = (props) => {
    return(
        <div className="host">
            <p className="host__name">{props.name}</p>
            <img className="host__picture" src={props.picture} alt="Propriétaire du bien" />
        </div>
    )
}

export default Host;