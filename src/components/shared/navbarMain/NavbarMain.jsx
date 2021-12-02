import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import './navbarMain.css'

export const NavbarMain = () => {

  return (
    <Navbar bg="light" expand="lg" >
      <Container className="d-flex align-items-center">
        <div className=" d-flex justify-content-center justify-content-lg-start align-items-center text-center logo-navbar-contain">
        <Navbar.Brand as={NavLink} to="/" >SuperHero API</Navbar.Brand>
        </div>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="m-auto pb-2  border-0 ">
                <div className="d-flex  flex-column flex-lg-row align-items-center justify-content-center w-100 navbar-links">
                    <li className="p-2 mt-2 mx-3" >
                        <Nav.Link as={NavLink} to="/" activeclassname="link-active">Team</Nav.Link>
                    </li>
                    <li className="p-2 mt-2 mx-3">
                        <Nav.Link as={NavLink} to="/searchPage" activeclassname="link-active">Search SuperHeros</Nav.Link>
                    </li>
                    <li className="p-2 mt-2 mx-3">
                        <Nav.Link as={NavLink} to="/login" activeclassname="link-active">Login</Nav.Link>
                    </li>
                </div>
          </Nav>

        </Navbar.Collapse>
        
<Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  )
}
