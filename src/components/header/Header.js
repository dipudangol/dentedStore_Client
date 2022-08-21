import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <Navbar bg="success" variant="dark" expand="md">
      <Container>
      <i variant="dark" class="fa-solid fa-bars"></i> 
        <Navbar.Brand href="/">Dented Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Login</Link>
            <Link className="nav-link" to="/Register">Register</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
