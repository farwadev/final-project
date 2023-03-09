import React from 'react';
// import images
import img from '../images/logo1.jpg'

// routing links
import { Link } from "react-router-dom";




function Navbar(props) {
  return (
// navbar
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src={img} width="250px"></img></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link " aria-current="page" to="/home">HOME</Link>
            <Link className="nav-link " aria-current="page" to="/services">SERVICES</Link>
            <Link className="nav-link " aria-current="page" to="/categories">CATEGORIES</Link>
            <Link className="nav-link" to="/about">ABOUT </Link>
            <Link className="nav-link" to="/contact">CONTACT</Link>


          </div>
        </div>
      </div>
    </nav>

  );
}
export default Navbar;
