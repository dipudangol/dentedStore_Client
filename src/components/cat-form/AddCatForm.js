import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';

const AddCatForm = () => {


    const initialState = {
        status: "inactive",
        name: " ",
        parentId: null
    };

    const [form, setForm] = useState(initialState);

    const { categories } = useSelector((state) => state.category);
    const dispatch = useDispatch();

    const handleOnchange = (e) => {
        let { checked, name, value } = e.target;
        if (name === 'status') {
            value = checked ? 'active' : 'inactive'
        }
        setForm({
            ...form,
            [name]: value,
        });


    };

    const handleOnsubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };


    return (
        <Form onSubmit={handleOnsubmit} className="py-5 mb-4">
            <h4 className="mb-3">Add New Categories</h4>
            <Row className='g-2'>
                <Col md='2'>
                    <Form.Group>
                        <Form.Check name="status" label="status" type="switch" onChange={handleOnchange}></Form.Check>
                    </Form.Group>
                </Col>
                <Col md='4'>
                    <Form.Group>
                        <Form.Select name="parentId" onChange={handleOnchange}>
                            <option value="">Select Parent Category</option>
                            {
                                categories.length > 0 && categories.map((item) => !item.parentId && <option value={item._id }>{item.name}</option>)
                            }
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md='4'>
                    <Form.Group>
                        <Form.Control type="text" name="name" placeholder="enter category name" onChange={handleOnchange}></Form.Control>
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