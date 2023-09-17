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

        <div className='container_geral'>
          <CustomerProvider>
            <NavBar />
          <div className='container_interno'>
            <Routes>
              <Route path="/" element={<LoginPage/>}/>
              <Route path="/customer/:id" element={<CustomerPage/>}/>
            </Routes>
          </div>
          </CustomerProvider>
        </div>
    </Router>
  );
}

export default App;
