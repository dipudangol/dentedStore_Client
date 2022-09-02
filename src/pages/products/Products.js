import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AdminLayout from '../../components/layout/AdminLayout'
import { ProductTable } from '../../components/product-table/ProductTable'

const Products = () => {
    return (
        <AdminLayout>
            <h1>Products</h1>
            <div className="text-end">
                <Link to="/product/new">
                    <Button variant="primary">
                        <i class="fa-solid fa-plus"></i>Add new products
                    </Button>
                </Link>
            </div>
            <hr/>
            <ProductTable />
        </AdminLayout>
    )
}

export default Products