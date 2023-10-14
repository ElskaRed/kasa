import React from 'react';
import ReactDOM from 'react-dom/client'; 
import Router from "./Router.jsx";
import {RouterProvider} from "react-router-dom";

//Composant qui appelle le router sur le DOM

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router} ></RouterProvider>
  </React.StrictMode>
);