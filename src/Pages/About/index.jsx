import BannerAbout from "../../Components/BannerAbout";
import './about.scss';
import Dropdown from '../../Components/Dropdown';

const About = () => {
    return (
        <div className="wrapper">
            <BannerAbout />
            <div className="wrapper__dropdown">
                <Dropdown />
                <Dropdown />
                <Dropdown />
                <Dropdown />
            </div>
        </div>
    );
};

export default About;