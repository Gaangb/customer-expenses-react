import './App.css';
import { CustomerProvider } from './hooks/CustomerHooks';
import CustomerPage from './pages/customerPage';
import { LoginPage } from './pages/loginPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { useCustomer } from './hooks/CustomerHooks';
import NavBar from './components/navBar';

function App() {
  return (
    <Router>
        <NavBar />
        <div className='container_geral'>
          <CustomerProvider>
            <Routes>
              <Route path="/" element={<LoginPage/>}/>
              <Route path="/customer/:id" element={<CustomerPage/>}/>
            </Routes>
          </CustomerProvider>
        </div>
    </Router>
  );
}

export default App;
