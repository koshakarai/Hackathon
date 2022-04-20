import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

import InfoPage from './pages/infoPage';
import LoginPage from './pages/loginPage';
import RegistrationPage from './pages/registrationPage';


import './App.css';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<InfoPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/registration" element={<RegistrationPage/>}/>
      </Routes>
      
    </>
  );
}

export default App;