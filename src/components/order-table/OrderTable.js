import React, { useEffect, useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getOrders } from '../../pages/orders/orderAction';
import { PaginationBasic } from '../pagination/Pagination';

const productPerPage = 10;
export const OrderTable = () => {
    const [active, setActive] = useState(1);
    const [display, setDisplay] = useState([]);

    const { orders } = useSelector((state) => state.orders);
    const dispatch = useDispatch();
    useEffect(() => {
        !orders.length && dispatch(getOrders());
        setDisplay(orders);
    }, [dispatch, orders]);


    const handleOnPaginationClick = (num) => {
        setActive(num);

    };

    const handleonChangeStatus = (e) => {
        e.preventDefault();
        const { value } = e.target
        if (!value) {

            setDisplay(orders);
        }
        const filterArg = orders.filter(item => item.status === value)
        setDisplay(filterArg);
    }

    const pages = Math.ceil(display.length / productPerPage);
    const productStartAt = productPerPage * (active - 1);
    const productEndAt = productStartAt + productPerPage;
    return (
        <div>
            <div className='d-flex justify-content-between'>
                <div>{display.length} found!! </div>
                <div>
                    <Form>
                        <Form.Group>
                            <Form.Select onChange={handleonChangeStatus}>
                                <option value="">-----Filter----</option>
                                <option value="shipped">Shipped</option>
                                <option value="processing">Processing</option>
                                <option value="cancelled">Cancelled</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </div>
            </div>
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
                        display.map((item, i) => (
                            i >= productStartAt && i < productEndAt && (
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{item.status}</td>
                                    <td>{item?.buyer?.fName} {item?.buyer?.lName}</td>
                                    <td>{item.totalAmount}</td>
                                    <td>{item?.paymentInfo?.status}</td>
                                    <td>{item?.paymentInfo?.paidAmount}</td>
                                    <td>
                                        <Link to={`/order/${item?._id}`}>
                                            <Button variant="info">View Order</Button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        ))
                    }
                </tbody>
            </Table>
            <PaginationBasic pages={pages} active={active} handleOnPaginationClick={handleOnPaginationClick} />
        </div>
    )
}
