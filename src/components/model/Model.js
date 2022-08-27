import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { setModalShow } from '../../pages/system-state/systemSlice';

export const CustomModal = ({ title, children }) => {
    const dispatch = useDispatch();
    const { modalShow } = useSelector((state) => state.system);
    return (
        <Modal
            show={modalShow}
            onHide={() => dispatch(setModalShow(false))}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='py-5 mb-4'>
                {children}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => { }}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}
