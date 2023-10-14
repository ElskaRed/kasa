import Header from './Components/Header';
import './style/globalStyle.scss';
import Footer from './Components/Footer';
import {Outlet} from 'react-router-dom';

// Composant dessinant le layer de l'application. 
// Ici le header et le footer font parti du layer et n'ont dont pas besoin d'être appelés sur les composants page.

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