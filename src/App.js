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

import { PrivateRouter } from './components/private-router/privateRouter';
import { NewProducts } from './pages/products/NewProducts';
import { EditProduct } from './pages/products/EditProduct';

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

          <Route path="/payment-method" element={
            <PrivateRouter>
              <PaymentMethod />
            </PrivateRouter>} />

          <Route path="/product/new" element={
            <PrivateRouter>
              <NewProducts />
            </PrivateRouter>} />

          <Route path="/product/edit/:_id" element={
            <PrivateRouter>
              <EditProduct />
            </PrivateRouter>} />



          {/* public routes */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/Register" element={<AdminRegistration />} />
          <Route path="/admin/verify-email" element={<EmailVerification />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
