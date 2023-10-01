import Banner from '../../Components/Banner';
import Gallery from '../../Components/Gallery';
import './home.scss';

const Home = () => {
    return (
        <div className="wrapper">
            <Banner />
            <Gallery />
        </div>
    );
};

export default Home;