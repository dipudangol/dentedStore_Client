import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

export const Header = () => {
  return (
    <Navbar bg="success"  variant="dark" expand="md">
      <Container>
        <Navbar.Brand href="/">Dented Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
