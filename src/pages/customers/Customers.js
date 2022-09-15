import React from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import { UserTable } from '../../components/user-table/UserTable'

const Customers = () => {
    return (
        <AdminLayout>
            <div>Customers</div>
            <UserTable/>
        </AdminLayout>
    )
}

export default Customers