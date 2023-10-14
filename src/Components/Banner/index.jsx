import './banner.scss';

// Composant bannière appelé dans la page d'accueil et dans la page à propos.

const Banner = (props) => {
    return (
        <div className="banner">
            <img src={props.img} alt="Bannière" className="banner__img"/>
            <h1 className="banner__title">{props.title}</h1>
            <div className="banner__darken"></div>
        </div>
    );
};

export default Banner;