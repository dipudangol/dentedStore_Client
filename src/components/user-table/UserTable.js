import React, { useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getUsers } from '../../pages/customers/customerAction';

export const UserTable = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch]);

    const { users } = useSelector((state) => state.users);

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th># </th>
                        <th>ID</th>
                        <th> Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{item.id}</td>
                                <td>{item?.fName} {item?.lName}</td>
                                <td>{item?.email}</td>
                                <td>{item?.phone}</td>
                                {/* <td>
                                    <Link to ={`/order/${item?._id}`}>
                                        <Button variant="info">View Order</Button>
                                    </Link>
                                </td> */}
                            </tr>

                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}
