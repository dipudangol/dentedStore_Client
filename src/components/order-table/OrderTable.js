import React, { useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getOrders } from '../../pages/orders/orderAction';

export const OrderTable = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOrders())
    }, [dispatch]);

    const { orders } = useSelector((state) => state.orders);

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th># </th>
                        <th>Status</th>
                        <th>Buyer Name</th>
                        <th>Order Total</th>
                        <th>Payment Status</th>
                        <th>Price</th>
                        <th>Order detail</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((item, i) => (
                            <tr>
                                <td>{i + 1}</td>
                                <td>{item.status}</td>
                                <td>{item?.buyer?.fName} {item?.buyer?.lName}</td>
                                <td>{item.totalAmount}</td>
                                <td>{item?.paymentInfo?.status}</td>
                                <td>{item?.paymentInfo?.paidAmount}</td>
                                <td>
                                    <Link to ={`/order/${item?._id}`}>
                                        <Button variant="info">View Order</Button>
                                    </Link>
                                </td>
                            </tr>

                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}
