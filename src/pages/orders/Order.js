import React from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import { OrderTable } from '../../components/order-table/OrderTable'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Order = () => {
    return (

        <div>
            <AdminLayout>
                <h1 className='py-3'>
                    Order Management
                </h1>
                <OrderTable/>
                <Link to='/dashboard'>
          <Button variant="none">
            <i class="fa-solid fa-angle-left"></i>Back
          </Button>
        </Link>
            </AdminLayout>
        </div>
    )
}

export default Order