import Navigation from "../Navigation/index";
import logo from '../../assets/images/logo-header.png';
import './header.scss';

//Header directement placé dans le layer de l'application dans le composant App.

const Header = () => {
    return(
        <div className="header">
            <img src={logo} alt="Logo Kasa" className="header__logo" />
            <Navigation />
        </div>
    );
};

export default Header;