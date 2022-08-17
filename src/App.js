import { Button } from 'react-bootstrap';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from './pages/login/Login';
import AdminRegistration from './pages/admin-registration/AdminRegistration';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
          <Route path="/Register" element={<AdminRegistration />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
