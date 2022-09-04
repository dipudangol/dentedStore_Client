import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import AdminLayout from '../../components/layout/AdminLayout'
import { CustomModal } from '../../components/model/Model'
import { ProductTable } from '../../components/product-table/ProductTable'
import { deleteProductAction, getSingleProductsAction } from './productAction'

export const EditProduct = () => {

  const dispatch = useDispatch();
  const { _id } = useParams();

  const { selectedProduct } = useSelector(state => state.products);


  useEffect(() => {
    _id && dispatch(getSingleProductsAction(_id))
  }, [_id, dispatch]);

  const handleOnDelete = (_id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      const { thumbnail, images } = selectedProduct;
      console.log(images);
      const imgs = [thumbnail, ...images];
      console.log([...new Set(imgs)]);
      deleteProductAction(_id, [...new Set(imgs)]);
    }
  }

  return (
    <AdminLayout>

      <div className='mt-3 mb-3'>
        <Link to='/products'>
          <Button variant="none">
            <i class="fa-solid fa-angle-left"></i>Back
          </Button>
        </Link>
        <h1>Update Products</h1>
        <hr />
        <div className=''>
      
        </div>
        <div className='text-end py-3'>
          <Button variant="danger" onClick={() => handleOnDelete(_id)}>Delete Product</Button>
        </div>
      </div>
    </AdminLayout>
  )
}
