import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AdminLayout from '../../components/layout/AdminLayout'
import { UserTable } from '../../components/user-table/UserTable'

const Customers = () => {
    return (
        <AdminLayout>
            <h2 className='py-3'>Customers</h2>
            <hr />
            <div className="text-end mb-3">
                < Link to="/product/new">
                    <Button variant="primary">
                        <i class="fa-solid fa-plus"></i>Add new User
                    </Button>
                </Link>
            </div>
            <UserTable />
        </AdminLayout>
    )
}

export default Customers