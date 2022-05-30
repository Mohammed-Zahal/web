import React from 'react'
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top" id='foot'>
        <p className="col-md-4 mb-0 text-muted">&copy; 2022 Company, Inc</p>
        <NavLink to="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <svg className="bi me-2" width="40" height="32"><use ahref="#bootstrap" /></svg>
        </NavLink>
      </footer>
    </>
  )
}

export default Footer