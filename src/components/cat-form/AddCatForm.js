import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { CustomInputField } from '../customInputField/CustomInputField'

const AddCatForm = () => {
    return (
        <Form className="py-5 mb-4">
            <h4 className="mb-3">Add New Categories</h4>
            <Row className='g-2'>
                <Col md='2'>
                    <Form.Group>
                        <Form.Check name="status" label="status" type="switch"></Form.Check>
                    </Form.Group>
                </Col>
                <Col md='4'>
                    <Form.Group>
                        <Form.Select name="parentId">
                            <option value="">Select Parent Category</option>
                            <option value="">Laptops</option>
                            <option value="">Electronics</option>
                            <option value="">Home and Decor</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md='4'>
                    <Form.Group>
                        <Form.Control type="text" name="name" placeholder="enter category name"></Form.Control>
                    </Form.Group>
                </Col>
                <Col md='2'>
                    <Form.Group>
                        <Button variant="primary" type="submit">Add Category</Button>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    )
}


export default AddCatForm;