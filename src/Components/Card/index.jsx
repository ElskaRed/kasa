import './card.scss';

const Card = () => {
    return (
        <article className="card">
            <img src='https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg' alt="location" className="card__img" />
            <p className="card__title">Titre de la location</p>
        </article>
    )
}

export default Card;