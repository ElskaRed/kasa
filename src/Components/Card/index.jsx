import './card.scss';

// Composant Card appelé dans le composant Gallery

const Card = ({image, title}) => {
    return (
        <article className="card">
            <img src={image} alt={title} className="card__img" />
            <h2 className="card__title">{title}</h2>
        </article>
    )
}

export default Card;