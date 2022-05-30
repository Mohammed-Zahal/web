import React from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow" id='navs'>
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active fs-5 fw-bolder" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active fs-5 fw-bolder" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active fs-5 fw-bolder" to="/contact">Contacts</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active fs-5 fw-bolder" to="/services">Services</NavLink>
              </li>
            </ul>
            <h1 className="navbar-brand fw-bolder fs-2 px-4 mt-2  mx-auto" id='head'>CEYMOX</h1>
            <NavLink className="btn btn-outline-primary ms-auto rounded-pill" to="/login"> <i className="fa fa-sign-in me-2"></i> Login</NavLink>
            <NavLink className="btn btn-outline-primary ms-2 rounded-pill" to="/register"> <i className="fa fa-user-plus me-2"></i> Register</NavLink>
            <NavLink className="btn btn-outline-primary ms-2 rounded-pill" to="/dashboard"> <i className="fa fa-user-plus me-2"></i> Dashboard</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar