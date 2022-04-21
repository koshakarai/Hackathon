import { Routes, Route, Link } from 'react-router-dom';
import { RequireAuth } from './hoc/require';
import InfoPage from './pages/infoPage';
import RegistrationPage from './pages/registrationPage';
import Seller from './pages/SellerPage';
import Buyer from './pages/BuyerPage';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<InfoPage/>}/>
        <Route path="/registration" element={<RegistrationPage/>}/>
        <Route path="/Buyer/:id" element={<RequireAuth><Buyer/></RequireAuth>}/>
        <Route path="/Seller/:id" element={<RequireAuth><Seller/></RequireAuth>}/>

      </Routes>
      
    </>
  );
}

export default App;
