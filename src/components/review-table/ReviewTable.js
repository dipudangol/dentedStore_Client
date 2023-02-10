import React, { useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getReviews } from '../../pages/reviews/reviewAction';


export const ReviewTable = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getReviews())
    }, [dispatch]);

    const { reviews } = useSelector((state) => state.review);

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th># </th>
                        <th>ID</th>
                        <th> Product Name</th>
                        <th>Reviewer Name</th>
                        <th>Rating</th>
                        <th> Review</th>
                        <th> Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reviews.map((item, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{item.id}</td>
                                <td>{item?.productName}</td>
                                <td>{item?.reviewby}</td>
                                <td>{item?.rating}</td>
                                <td>{item?.review}</td>
                                <td>
                                    <a href="">info</a></td>
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
