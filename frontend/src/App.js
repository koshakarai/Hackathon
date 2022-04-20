import { Routes, Route, Link } from 'react-router-dom';

import InfoPage from './pages/infoPage';
import LoginPage from './pages/loginPage';
import RegistrationPage from './pages/registrationPage';
import Seller from './pages/SellerPage';
import Buyer from './pages/BuyerPage';

import './App.css';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<InfoPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/registration" element={<RegistrationPage/>}/>
        <Route path="/Buyer/:id" element={<Buyer/>}/>
        <Route path="/Seller/:id" element={<Seller/>}/>

      </Routes>
      
    </>
  );
}

export default App;
