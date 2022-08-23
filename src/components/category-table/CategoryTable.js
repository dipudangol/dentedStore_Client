import React, { useEffect } from 'react'
import { Button, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryAction } from '../../pages/categories/categoryAction';

export const CategoryTable = () => {


    const { categories } = useSelector((state) => state.category);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategoryAction());
    }, []);


    return (
        <Row>
            <Table striped hover bordered>
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Name</th>
                        <th>Level</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categories.length > 0 && categories.map((item, i) => (
                            <tr>
                                <td>{item.status}</td>
                                <td>{item.name}</td>
                                <td>{item.parentId ? "children" : "parent"}</td>
                                <td><Button variant="danger">Delete</Button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>

        </Row>
    )
}
