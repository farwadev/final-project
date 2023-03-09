import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Services from './pages/services';
import About from './pages/about'
import Home from './pages/home'
import Contact from './pages/contact';
import Categories from './pages/categories';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "services",
    element: <Services/>,
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path: "home",
    element: <Home/>,
  },
  {
    path: "contact",
    element: <Contact/>,
  },
  {
    path: "categories",
    element: <Categories/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 < RouterProvider router={router}/>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();