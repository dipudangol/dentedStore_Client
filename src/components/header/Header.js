import React from 'react'
import "./Header.css";

import { Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom"
import { logoutAdminAction } from '../../pages/login/userAction'
import { setShowSideMenu } from '../../pages/system-state/systemSlice'

import SearchIcon from '@mui/icons-material/Search';


export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleShow = () => dispatch(setShowSideMenu(true));

  const handleOnlogout = () => {
    dispatch(logoutAdminAction());
    navigate("/");
  }

  const { user } = useSelector((state) => state.admin);

  return (
    <Navbar bg="success" variant="dark" expand="md">
      <Container>
        {user._id && (
          <i className="fa-sharp fa-solid fa-bars" onClick={handleShow}></i>
        )}
        <Navbar.Brand href="#">  Dented Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            {user._id ? (
              <>
                <span>Hello, {user.fName}</span>
                <Link className="nav-link" to="/" onClick={handleOnlogout}>Logout</Link>
              </>

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
