import logo from '../../assets/images/logo-footer.png'
import './footer.scss'

const Footer = () => {
    return(
        <div className="footer">
            <img src={logo} alt="logo Kasa" className="footer__logo"/>
            <p className="footer__text">© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;