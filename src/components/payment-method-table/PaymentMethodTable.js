import React, { useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getPMAction } from '../../pages/payment-method/paymentAction';

const PaymentMethodTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPMAction());
  }, [dispatch]);



  const { paymentMethods } = useSelector((state) => state.paymentMethod);
  const amount = useSelector((state) => state.paymentMethod);
  console.log(paymentMethods, "asas", amount)


  return (
    <div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {paymentMethods.length > 0 &&
            paymentMethods.map((item, i) => (
              <tr key={item.id}>
                <td>{i + 1}</td>
                <td>{item.status}</td>
                <td>{item.name}</td>
                <td>
                  <Button variant="warning">Edit</Button>{" "}
                  <Button variant="danger">Delete</Button>
                  </td>
              </tr>
            ))
          }

        </tbody>
      </Table>
    </div>
  )
}

export default PaymentMethodTable