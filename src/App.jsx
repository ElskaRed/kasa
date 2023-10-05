import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home'
import About from './Pages/About';
import Error from './Pages/Error';
import FicheLogement from './Pages/FicheLogement';
import './style/globalStyle.scss';
import Footer from './Components/Footer';

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