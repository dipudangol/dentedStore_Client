import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { setShowSideMenu } from '../../pages/system-state/systemSlice'

export const Header = () => {
  const dispatch = useDispatch();
  const handleShow = () => dispatch(setShowSideMenu(true));

  const { user } = useSelector((state) => state.admin)

  return (
    <Navbar bg="success" variant="dark" expand="md">
      <Container>
        {user._id && (
          <i className="fa-regular fa-bars" onClick={handleShow}></i>
        )}{""}
        <Navbar.Brand href="/">  Dented Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            {user._id ? (
              <Link className="nav-link" to="/">Logout</Link>

            ) : (<>
              <Link className="nav-link" to="/">Login</Link>
              <Link className="nav-link" to="/Register">Register</Link>
            </>
            )}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
