import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { setShowSideMenu } from '../../pages/system-state/systemSlice';

const SideMenu = () => {
    const dispatch = useDispatch();
    const { showSideMenu } = useSelector((state) => state.system);

    const handleClose = () => dispatch(setShowSideMenu(false));;
    const handleShow = () => dispatch(setShowSideMenu(true));

    return (
        <>
            <Offcanvas show={showSideMenu} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Dented Store admin</Offcanvas.Title>
                </Offcanvas.Header>
                <hr />
                <Offcanvas.Body>
                    <ListGroup variant="flush" className="fs-5">
                        <ListGroup.Item>
                            <Link to="/dashboard" onClick={handleClose} className=" nav-link" >
                                <i className="fa-solid fa-gauge"></i> Dashboard
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link to="/category" onClick={handleClose} className="nav-link">
                                <i className="fa-solid fa-list"></i> Categories
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link to="/products" onClick={handleClose} className="nav-link">
                                <i className="fa-brands fa-product-hunt"></i> Products
                            </Link >
                        </ListGroup.Item >
                        <ListGroup.Item>
                            <Link to="/payment-method" onClick={handleClose} className="nav-link"> <i className=" fa-solid fa-money-check"></i> Payment Methods</Link>
                        </ListGroup.Item >
                        <ListGroup.Item>
                            <Link to="" onClick={handleClose} className="nav-link"><i className=" fa-solid fa-people-group"></i>  Customers </Link>
                        </ListGroup.Item >
                        <ListGroup.Item>
                            <Link to="" onClick={handleClose} className="nav-link"> <i className=" fa-solid fa-cart-arrow-down"></i> Orders </Link >
                        </ListGroup.Item >
                        <ListGroup.Item>
                            <Link to="" onClick={handleClose} className="nav-link">
                                <i className="fa-solid fa-star"></i> Reviews
                            </Link >
                        </ListGroup.Item >
                        <ListGroup.Item>
                            <Link to="" onClick={handleClose} className="nav-link">
                                <i className="fa-solid fa-gear"></i> Settings
                            </Link >
                        </ListGroup.Item >
                    </ListGroup >
                </Offcanvas.Body >
            </Offcanvas >
        </>
    );
}


export default SideMenu;