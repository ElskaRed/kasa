import './proprio.scss';

const Host = (props) => {
    return(
        <div className="host">
            <p className="host__name">{props.proprioNom}</p>
            <img src={props.proprioImg} alt={props.id} />
        </div>
    )
}

export default Host;