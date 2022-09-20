import React, { useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import AdminLayout from '../../components/layout/AdminLayout'
import { deleteAdminUsersAction, fetchAdminUsersAction } from '../login/userAction'
import { getUsers } from './customerAction'

export const AdminUsers = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAdminUsersAction())
    }, [dispatch]);

    const { adminUsers, user } = useSelector((state) => state.admin);


    const handleOnDelete = (_id) => {
        console.log(_id, "from page");
        if (window.confirm("Are you sure you want to delete users?")) {
            dispatch(deleteAdminUsersAction(_id));
        }
    }

    return (
        <AdminLayout>
            <h2 className='py-3'>Admin Users</h2>
            <hr />
            <div className='text-end py-3'>
                <Link to="/register">
                    <Button variant="warning">
                        <i class="fa-solid fa-plus"></i>Add New System Admin</Button>
                </Link>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th># </th>
                        <th>Status </th>
                        <th> Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        adminUsers.length && adminUsers.map((item, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{item.status}</td>
                                <td>{item?.fName} {item?.lName}</td>
                                <td>{item?.email}</td>
                                <td>{item?.phone}</td>
                                <td>
                                    <Button variant="danger"
                                        onClick={() => handleOnDelete(item?._id)}
                                        disabled={item?._id === user?._id}>Delete</Button>
                                </td>
                            </tr>

                        ))
                    }
                </tbody>
            </Table>
        </AdminLayout>
    )

}
