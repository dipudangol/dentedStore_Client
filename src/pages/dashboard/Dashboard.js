import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CustomTable } from '../../components/custom-table/CustomTable';
import { CustomCard } from '../../components/CustomCard';
import AdminLayout from '../../components/layout/AdminLayout'
import { Scrollbar } from '../../components/scrollbar/Scrollbar';
import { getProductsAction } from '../products/productAction';
import { DisplayStats } from './DisplayStats';

const Dashboard = () => {

  const clientTableHead = ["First Name", "Last Name", "Joined Date"]
  const clientInfo = [
    {
      fName: "Dipu",
      lName: "Dangol",
      joinedAt: "2020/2/1"
    },
    {
      fName: "AATE",
      lName: "kumar",
      joinedAt: "4/10/12"
    },

  ]
  const OrderHead = ["Status", "Name", "Order Date", "Order Total", "Payment Status"]
  const OrderInfo = [
    {
      status: "active",
      fName: "Dipu",
      lName: "dangol",
      OrderDate: "2020-1-4",
      PaymentStatus: "pending",
    },
    {
      status: "inactive",
      fName: "Manish",
      lName: "Shrestha",
      OrderDate: "2021-2-6",
      PaymentStatus: "Success",
    }
  ]
  const { productList } = useSelector(state => state.products);
  const dispatch = useDispatch();
  const activeProduct = productList.filter(item => item.status === "active")

  useEffect(() => { !productList.length && dispatch(getProductsAction()) }, [dispatch]);

  return (
    <AdminLayout>

      <h4>Dashboard</h4>
      <hr style={{
        "width": "15%",
      }} />


<Scrollbar productList={productList} />
      {/* product summary */}
      <div className='products mt-3 py-3'>
        <h5>Product Summary</h5>
        <hr />
        <Row className='d-flex g-4'>
          <Col md="4">
            <CustomCard count={productList.length} title="Total Products"  />
          </Col>

          <Col md="4">
            <CustomCard count={activeProduct.length} title="Active products" />
          </Col>

          <Col md="4">
            <CustomCard count={productList.length - activeProduct.length} title="Bought at there" />
          </Col>

        </Row>
      </div>



      {/* client summary */}
      <div className='my-5'>
        <h5>Client Summary</h5>

        <hr />
        <CustomTable tableHead={clientTableHead} tableData={clientInfo} />
      </div>

      {/* client summary */}
      <div className='my-5'>
        <h5>Client Order {" "}
          <Link to="/orders" className='text-decoration-blue'>View All Orders >></Link></h5>
        <hr />
        <CustomTable tableHead={OrderHead} tableData={OrderInfo} />
      </div>



     
      <DisplayStats />
    </AdminLayout>
  )
}

export default Dashboard