import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { CustomerProvider } from './hooks/CustomerHooks';
import CustomerPage from './pages/customerPage';
import { LoginPage } from './pages/loginPage';
import NavBar from './components/navBar';
import { SummaryPage } from './pages/summaryPage';
import './App.css';

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
              <Route path="/summary/:id" element={<SummaryPage/>}/>
            </Routes>
          </div>
          </CustomerProvider>
        </div>
    </Router>
  );
}

export default App;
