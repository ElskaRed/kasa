import {createBrowserRouter} from "react-router-dom";
import Home from './Pages/Home'
import About from './Pages/About';
import Error from './Pages/Error';
import FicheLogement from './Pages/FicheLogement';
import App from './App';

// Composant réunissant les routes de React Router

const Router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            children: [
                {element: <Home />, index: true},
                {path: '/about', element: <About />},
                {path: '/logement/:id', element: <FicheLogement />},
                {path: '/error', element: <Error />},
                {path: '/*', element: <Error />},
            ]
        }
    ]
)

export default Router;