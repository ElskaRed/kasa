import Header from './Components/Header';
import './style/globalStyle.scss';
import Footer from './Components/Footer';
import {Outlet} from 'react-router-dom';

const App = () => {
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );

};

export default App;