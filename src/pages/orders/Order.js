import React from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import { OrderTable } from '../../components/order-table/OrderTable'

const Order = () => {
    return (

        <div>
            <AdminLayout>
                <h1 className='py-3'>
                    Order Management
                </h1>
                <OrderTable/>
            </AdminLayout>
        </div>
    )
}

export default Order