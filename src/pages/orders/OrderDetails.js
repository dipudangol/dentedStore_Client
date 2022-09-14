import React from 'react'
import { Link } from 'react-router-dom'
import AdminLayout from '../../components/layout/AdminLayout'
import { OrderEditForm } from '../../components/order-edit/OrderEditForm'
import { OrderTable } from '../../components/order-table/OrderTable'
const OrderDetails = () => {
    return (

        <div>
            <AdminLayout>
                <div className='mt-3'>
                    <Link to="/orders" className='text-decotaion-none text-secondary '>&lt; Back</Link>
                </div>
                <h1 className='py-3'>
                    Order Details
                </h1>
                <hr />
                <OrderEditForm />
            </AdminLayout>
        </div>
    )
}

export default OrderDetails