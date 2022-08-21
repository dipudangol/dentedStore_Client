import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from './pages/login/Login';
import AdminRegistration from './pages/admin-registration/AdminRegistration';
import EmailVerification from './pages/admin-registration/emailVerification';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
          <Route path="/Register" element={<AdminRegistration />}/>
          <Route path="/admin/verify-email" element={<EmailVerification />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
