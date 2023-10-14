import Banner from '../../Components/Banner';
import Gallery from '../../Components/Gallery';
import './home.scss';
import bannerHome from '../../assets/images/bannerHome.png';

// Page d'accueil

const Home = () => {
    return (
        <div className="wrapper-home">
            <Banner 
                img={bannerHome}
                title="Chez vous, partout et ailleurs"
            />
            <Gallery />
        </div>
    );
};

export default Home;