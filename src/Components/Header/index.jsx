import Navigation from "../Navigation/index";
import logo from '../assets/images/logo-header.png'

const Header = () => {
    return(
        <div className="header">
            <img src={logo} alt="Logo Kasa" className="logo-header" />
            <Navigation />
        </div>
    );
};

export default Header;