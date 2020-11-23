import React from 'react';
import './Navbar.modules.css'
import Container from '@material-ui/core/Container'
import { Link } from 'react-router-dom'

const Navbar = () => {
   return (
      <Container className="container">
         <ul className="links-container">
            <li ><Link className="nav-link" to="/">About</Link></li>
            <li ><Link className="nav-link" to="/projects">Projects</Link></li>
            <li ><Link className="nav-link" to="/contact">Contact</Link></li>
         </ul>
      </Container>
   )
}

export default Navbar