import BannerAbout from "../../Components/BannerAbout";
import './about.scss';
import Collapse from '../../Components/Collapse';
import aboutText from '../../assets/data/about.json';

const About = () => {
    return (
        <div className="wrapper-about">
            <BannerAbout />
            <div className="wrapper-about__collapse">
                {aboutText.map((about) => {
                    return(
                        <Collapse key={about.title} title={about.title} text={about.text}/>
                    );
                })}
            </div>
        </div>
    );
};

export default About;