import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from './pages/login/Login';
import AdminRegistration from './pages/admin-registration/AdminRegistration';
import EmailVerification from './pages/admin-registration/emailVerification';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/dashboard/Dashboard';
import Products from './pages/products/Products';
import PaymentMethod from './pages/payment-method/PaymentMethod';
import Category from './pages/categories/Category';
import Order from './pages/orders/Order';

import { PrivateRouter } from './components/private-router/privateRouter';
import { NewProducts } from './pages/products/NewProducts';
import { EditProduct } from './pages/products/EditProduct';
import { AdminProfile } from './pages/admin-profile/AdminProfile';
import ResetPassword from './pages/login/ResetPassword';
import OrderDetails from './pages/orders/OrderDetails';
import Reviews from './pages/reviews/Reviews';
import Customers from './pages/customers/Customers';
import { AdminUsers } from './pages/customers/AdminUsers';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          {/* private routes */}
          <Route path="/dashboard"
            element={
              <PrivateRouter>
                <Dashboard />
              </PrivateRouter>
            }
          />
          <Route path="/products" element={
            <PrivateRouter>
              <Products />
            </PrivateRouter>} />

          <Route path="/category" element={
            <PrivateRouter>
              <Category />
            </PrivateRouter>} />

          <Route path="/orders" element={
            <PrivateRouter>
              <Order />
            </PrivateRouter>} />

          <Route path="/order/:_id" element={
            <PrivateRouter>
              <OrderDetails />
            </PrivateRouter>} />

          <Route path="/payment-method" element={
            <PrivateRouter>
              <PaymentMethod />
            </PrivateRouter>} />

          <Route path="/admin-profile" element={
            <PrivateRouter>
              <AdminProfile />
            </PrivateRouter>} />

          <Route path="/product/new" element={
            <PrivateRouter>
              <NewProducts />
            </PrivateRouter>} />

          <Route path="/product/edit/:_id" element={
            <PrivateRouter>
              <EditProduct />
            </PrivateRouter>} />

          <Route path="/reviews" element={
            <PrivateRouter>
              <Reviews />
            </PrivateRouter>} />

          <Route path="/users" element={
            <PrivateRouter>
              <Customers />
            </PrivateRouter>} />

          <Route path="/admin-users" element={
            <PrivateRouter>
              <AdminUsers />
            </PrivateRouter>} />



          {/* public routes */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/Register" element={<PrivateRouter> <AdminRegistration /> </PrivateRouter>} />
          <Route path="/admin/verify-email" element={<EmailVerification />} />
          <Route path="/forget-password" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </div>
  );
}

export default App;
