import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { postCategoryAction, updateCategoryAction } from '../../pages/categories/categoryAction';
import { CustomModal } from '../model/Model';

const EditCatForm = ({ selectCat }) => {


    const initialState = {
        status: "inactive",
        name: "blank",
        parentId: null,
    };

    const [form, setForm] = useState(initialState);

    const { categories } = useSelector((state) => state.category);
    const dispatch = useDispatch();


    useEffect(() => setForm(selectCat), [selectCat]);

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
        const { __v, slug,createdAt, updatedAt, ...rest } = form;
        dispatch(updateCategoryAction(rest));
        console.log(rest);
    };

 
    return (
        <CustomModal>
            <Form onSubmit={handleOnsubmit} className="py-5 mb-4">
                <h4 className="mb-3">Edit Categories</h4>
                <Row className='g-2'>
                    <Col md='2'>
                        <Form.Group>
                            <Form.Check
                                checked={form.status === "active"}
                                name="status" label="status" type="switch" onChange={handleOnchange}></Form.Check>
                        </Form.Group>
                    </Col>
                    <Col md='4'>
                        <Form.Group>
                            <Form.Select name="parentId" onChange={handleOnchange}>
                                <option value="">Select Parent Category</option>
                                {
                                    categories.length > 0 && categories.map((item) => !item.parentId && (
                                        <option key={item._id}
                                            selected={item._id === form.parentId}
                                            value={item._id}
                                        >
                                            {item.name}
                                        </option>))
                                }
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col md='4'>
                        <Form.Group>
                            <Form.Control type="text" name="name" value={form.name} 
                            placeholder="enter category name" onChange={handleOnchange} required></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md='2'>
                        <Form.Group>
                            <Button variant="primary" type="submit">Update Category</Button>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>

        </CustomModal>

    )
}


export default EditCatForm;