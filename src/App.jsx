import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home'
import About from './Pages/About';
import Error from './Pages/Error';
import FicheLogement from './Pages/FicheLogement';
import './style/globalStyle.scss';

const App = () => {
    return(
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/logement/:id" element={<FicheLogement />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    );

};

export default App;