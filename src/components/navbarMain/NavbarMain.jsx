import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import './navbarMain.css'
import { BiUserCircle } from 'react-icons/bi';
import { FaShareSquare } from 'react-icons/fa';
export const NavbarMain = ({ tokenLocalData }) => {


  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
  return (
    <Navbar bg="light" expand="lg" >
      <Container >
        <div className=" d-flex justify-content-between justify-content-lg-start align-items-center text-center logo-navbar-contain">
          <Navbar.Brand as={NavLink} to="/" >SuperHero API</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav" className="flex-row">
          <Nav className="ms-auto pb-2  border-0">
            <div className="d-flex  flex-column flex-lg-row align-items-center justify-content-center   navbar-links">

              <li className="p-2 mt-2 mx-3" >
                <Nav.Link as={NavLink} to="/" activeclassname="link-active">Team</Nav.Link>
              </li>
              <li className="p-2 mt-2 mx-3">
                <Nav.Link as={NavLink} to="/searchPage" activeclassname="link-active">Busca tus heroes</Nav.Link>
              </li>
              {tokenLocalData.token &&
                <li className="p-2 mt-2 mx-3">
                  <NavDropdown
                    title={<BiUserCircle className="mb-1" />}
                  >
                    <NavDropdown.Item className="text-center" onClick={logout} >
                      <FaShareSquare className="mb-1" /> Cerrar sesión
                    </NavDropdown.Item>
                  </NavDropdown>
                </li>
              }
              {!tokenLocalData.token &&
                <li className="p-2 mt-2 mx-3">
                  <Nav.Link as={NavLink} to="/login" activeclassname="link-active">Login</Nav.Link>
                </li>
              }
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
