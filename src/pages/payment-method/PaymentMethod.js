import React from 'react'
import { Button } from 'react-bootstrap'
import AdminLayout from '../../components/layout/AdminLayout'
import PaymentMethodTable from '../../components/payment-method-table/PaymentMethodTable'

const PaymentMethod = () => {
    return (
        <AdminLayout>
            <h4 className="py-4">Payment Method Managment</h4>
            <hr />
            <div>
                <Button variant="info"> {"  "}
                    <i className="fa-solid fa-plus"></i> Add New Payment Method {" "}
                </Button>
            </div>
            <PaymentMethodTable/>
        </AdminLayout>
    )
}

export default PaymentMethod