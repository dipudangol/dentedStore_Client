import React, { useEffect } from 'react'
import { Button, Form, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getSingleOrder } from '../../pages/orders/orderAction';
import { setSelectedOrders } from '../../pages/orders/orderSlice';


export const OrderEditForm = () => {
  const { _id } = useParams();
  const { orders, selectedOrder } = useSelector(state => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    if (orders.length) {
      const select = orders.filter((item) => item._id === _id)[0];
      dispatch(setSelectedOrders(select));
    } else {
      dispatch(getSingleOrder(_id));
    }
  }, [dispatch, orders, _id]);

  const { cart } = selectedOrder;

  return (
    <div>
      {/* status */}
      <div className='fw bold py-2 d-flex justify-content-between'>
        <div>Status: {selectedOrder.status}</div>
        <div className=''>
          <Form className='d-flex p-1'>
            <Form.Group>
              <Form.Select>
                <option value="">--Select--</option>
                <option value="shipped">Shipped</option>
                <option value="Cancel">Cancel</option>
              </Form.Select>
            </Form.Group>
            <Button variant="warning" className="">Update</Button>
          </Form>
        </div>
      </div>

      {/* buyer info */}
      <div className='shippinginfo card py-2 mt-mb-3'>
        <h2>Shipping Details</h2>
        <hr />
        <p>
          Order Date: 20-2-2021<br />
          Name: {selectedOrder?.buyer?.fName} {selectedOrder?.buyer?.lName}<br />
          Phone: {selectedOrder?.buyer?.phone}<br />
          Email: {selectedOrder?.buyer?.email}<br />
          Shipping Address: {selectedOrder?.shipping?.street},{selectedOrder?.shipping?.suburb}, {selectedOrder?.shipping?.state}<br />
        </p>
      </div>


      {/* payment info */}
      <div className='paymentinfo card py-2  mt-4'>
        <h2>Payment Info</h2>
        <hr />
        <p>
          Status:{selectedOrder?.paymentInfo?.status}<br />
          Total Paid: $ {selectedOrder?.paymentInfo?.paidAmount}<br />
          Paid Date: {selectedOrder?.paymentInfo?.paidDate}<br />
          Method:{selectedOrder?.paymentInfo?.method}<br />
          Transaction Id: {selectedOrder?.paymentInfo?.transactionId}<br />
        </p>
      </div>


      {/* cart info */}
      <div className='card py-2 mt-3 mb-4'>
        <h4>Cart Details</h4>
        <hr />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Thumbnail</th>
              <th>Name</th>
              <th>UNit Price</th>
              <th>Email</th>
              <th>Qty</th>
              <th>Sub Total</th>
            </tr>
          </thead>
          <tbody>
            {
              cart?.map((item, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>
                    <img src={item.thumbnail} alt="" width="100px"></img>
                  </td>
                  <td>{item.productName}</td>
                  <td>{item.salesPrice}</td>
                  <td>{item.qty}</td>
                  <td>{item.subTotal}</td>
                </tr>

              ))
            }
            <tr className='fw-border' >
              <td colSpan={5}>Total</td>
              <td>$ {selectedOrder.cartTotal}</td>
            </tr>
          </tbody>
        </Table>

      </div>

      {/* add note form */}
      <Form className="mt-3 card p-3">
        <Form.Group>
          <Form.Label>Add Note</Form.Label>
          <Form.Control as="textarea" placeholder="palce some notes" rows={5}></Form.Control>
        </Form.Group>
        <Button variant="primary">Add Note</Button>
      </Form>


      {/* margin top */}
      <div className='mt-5'>
        <div className="note-history mt-3">
          Date:10-03-2020
          <div className='p-2 card'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
             typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
             recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </div>

        <div className="note-history mt-3">
          Date:10-03-2020
          <div className='p-2 card'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
             typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
             recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      </div>

    </div >
  )
}
