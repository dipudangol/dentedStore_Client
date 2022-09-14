import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AdminLayout from '../../components/layout/AdminLayout'
import { Scrollbar } from '../../components/scrollbar/Scrollbar';
import { getProductsAction } from '../products/productAction';
import { DisplayStats } from './DisplayStats';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { productList } = useSelector(state => state.products);

  useEffect(() => { dispatch(getProductsAction()) }, [dispatch]);

  return (
    <AdminLayout>

      <div>Dashboard</div>
      <Scrollbar items={productList} />
      <DisplayStats/>
    </AdminLayout>
  )
}

export default Dashboard