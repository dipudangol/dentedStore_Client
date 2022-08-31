import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import AdminLayout from '../../components/layout/AdminLayout'
import { AddPaymentMethod } from '../../components/payment-method-forms/AddPaymentMethod'
import PaymentMethodTable from '../../components/payment-method-table/PaymentMethodTable'
import { setModalShow } from '../system-state/systemSlice'

const PaymentMethod = () => {

    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(setModalShow());
    }
    return (
        <AdminLayout>
            <h4 className="py-4">Payment Method Managment</h4>

            {/* Form to add payment method */}
            <AddPaymentMethod />

            <hr />
            <div className='text-end py-3'>
                <Button variant="info" onClick={handleOnClick}> {"  "}
                    <i className="fa-solid fa-plus"></i> Add New Payment Method {" "}
                </Button>
            </div>
            <PaymentMethodTable />
        </AdminLayout>
    )
}

export default PaymentMethod