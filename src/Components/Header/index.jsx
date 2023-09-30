import Navigation from "../Navigation/index";
import logo from '../../assets/images/logo-header.png';
import './header.scss';

const Header = () => {
    return(
        <div className="header">
            <img src={logo} alt="Logo Kasa" className="header__logo" />
            <Navigation />
        </div>
    );
};

export default Header;