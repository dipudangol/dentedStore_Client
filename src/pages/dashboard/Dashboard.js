import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
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
  const OrderHead=["Status","Name","Order Date","Order Total","Payment Status" ]
  const OrderInfo=[
    {
      status:"active",
      fName:"Dipu",
      lName:"dangol",
      OrderDate:"2020-1-4",
      PaymentStatus:"pending",     
    },
    {
      status:"active",
      fName:"Dipu",
      lName:"dangol",
      OrderDate:"2020-1-4",
      PaymentStatus:"pending",     
    }
  ]

  const dispatch = useDispatch();
  const { productList } = useSelector(state => state.products);

  useEffect(() => { dispatch(getProductsAction()) }, [dispatch]);

  return (
    <AdminLayout>

      <h4>
        <hr />Dashboard</h4>
      <hr />
      {/* product summary */}
      <div className='products mt-3 py-3'>
        <h5>Product Summary</h5>
        <hr />
        <Row className='d-flex flex-md-column g-4'>
          <Col md="4">
            <CustomCard count="4" title="Bought at there" />
          </Col>

          <Col md="4">
            <CustomCard count="4" title="Bought at there" />
          </Col>

          <Col md="4">
            <CustomCard count="4" title="Bought at there" />
          </Col>

          <Col md="4">
            <CustomCard count="4" title="Bought at there" />
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
        <h5>Client Order</h5>
        <hr />
        <CustomTable tableHead={OrderHead} tableData={OrderInfo} />
      </div>















      <Scrollbar items={productList} />
      <DisplayStats />
    </AdminLayout>
  )
}

export default Dashboard