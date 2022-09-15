import React from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import { ReviewTable } from '../../components/review-table/ReviewTable'


const Reviews = () => {
    return (
        <AdminLayout>
            <h3 className='py-3'>Review Management</h3>
            <hr/>

            <ReviewTable/>

        </AdminLayout>
    )
}

export default Reviews