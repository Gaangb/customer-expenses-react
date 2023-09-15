import './App.css';
import CustomerPage from './pages/customerPage';
import { LoginPage } from './pages/loginPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='container_geral'>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/customer" element={<CustomerPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
