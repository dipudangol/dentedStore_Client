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

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          {/* private routes */}
          <Route path="/dashboard" element={<Dashboard />} />



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
