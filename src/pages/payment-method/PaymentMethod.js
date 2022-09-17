import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import AdminLayout from '../../components/layout/AdminLayout'
import { AddPaymentMethod } from '../../components/payment-method-forms/AddPaymentMethod'
import PaymentMethodTable from '../../components/payment-method-table/PaymentMethodTable'
import { setModalShow } from '../system-state/systemSlice'
import { Link } from 'react-router-dom'

const PaymentMethod = () => {

    const dispatch = useDispatch();
    const [showform, setShowform] = useState(false);

    const handleOnAdd = (str) => {
        dispatch(setModalShow());
        setShowform(str);
    }


    return (
        <AdminLayout>
            <h4 className="py-4">Payment Method Managment</h4>

            {/* Form to add payment method */}
            <AddPaymentMethod />

            <hr />
            <div className='text-end py-3'>
                <Button variant="info" onClick={() => handleOnAdd("add")}> {"  "}
                    <i className="fa-solid fa-plus"></i> Add New Payment Method {" "}
                </Button>
            </div>
            <PaymentMethodTable showform={showform} handleOnAdPM={handleOnAdd} />
            <Link to='/dashboard'>
          <Button variant="none">
            <i class="fa-solid fa-angle-left"></i>Back
          </Button>
        </Link>
        </AdminLayout>
    )
}

export default PaymentMethod