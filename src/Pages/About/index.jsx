import Banner from "../../Components/Banner";
import './about.scss';
import Collapse from '../../Components/Collapse';
import aboutText from '../../assets/data/about.json';
import bannerAbout from '../../assets/images/bannerAbout.png';

// Page à propos

const About = () => {
    return (
        <div className="about">
            <Banner
                img={bannerAbout}
                title=''
            />
            <div className="about__collapse">
                {/* Ici on map le tableau du fichier about.json pour itérer sur ses différents éléments et appeler un composant Collapse à chaque fois. */}
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