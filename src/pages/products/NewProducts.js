import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AdminLayout from '../../components/layout/AdminLayout'
import { AddProductForm } from '../../components/product-form/AddProductForm'

export const NewProducts = () => {
  return (
    <AdminLayout>

      <div className='mt-3 mb-3'>
        <Link to='/products'>
          <Button variant="none">
            <i class="fa-solid fa-angle-left"></i>Back
          </Button>
        </Link>
      </div>
      <h1>Add new product form</h1>
      <hr/>
      
      <AddProductForm/>
     
    </AdminLayout>
  )
}
