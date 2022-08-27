import React, { useEffect, useState } from 'react'
import { Button, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryAction } from '../../pages/categories/categoryAction';
import EditCatForm from '../cat-form/EditCatForm';

export const CategoryTable = () => {

    const [selectCat, setSelectCat] = useState({});
    const { categories } = useSelector((state) => state.category);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategoryAction());
    }, [dispatch]);

    const parentcats = Object.values(categories).filter(({ parentId }) => !parentId);
    const childcats = Object.values(categories).filter(({ parentId }) => parentId);

    const handleOnEdit = (cat) => {
        setSelectCat(cat);
    }
    console.log(selectCat);

    return (
        <Row>
            <EditCatForm />
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
                        parentcats.length > 0 && parentcats.map((item, i) => (
                            <>
                                <tr key={item._id} className="bg-info">
                                    <td >{item.status}</td>
                                    <td>{item.name}</td>
                                    <td>{item.parentId ? "children" : "parent"}</td>
                                    <td><Button variant="danger">Delete</Button>{' '}
                                        <Button variant="warning" onClick={() => handleOnEdit(item)}>Edit</Button>
                                    </td>
                                </tr>
                                {childcats.map((cat) => cat.parentId === item._id && (
                                    <tr key={cat._id}>
                                        <td className={cat.status === "active" ? "text-success" : "text-danger"}>{cat.status}</td>
                                        <td>{cat.name}</td>
                                        <td>{cat.parentId ? "children" : "parent"}</td>
                                        <td>
                                            <Button variant="danger">Delete</Button>{" "}
                                            <Button variant="warning" onClick={() => handleOnEdit(cat)}>Edit</Button>
                                        </td>
                                    </tr>

                                ))}
                            </>

                        ))
                    }
                </tbody>
            </Table>

        </Row>
    )
}
