// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componnents/Navbar/Navbar';
import Home from './componnents/Home/Home';
import PaymentDetails from './componnents/PaymentDetails';
import Destination from './componnents/Destination';
import Reservation from './componnents/Reservation';
import Activity from './componnents/Activity';
import Login from './componnents/login';
import Signup from './componnents/signup';

import About from './componnents/About/About'
// import Footer from './componnents/Footer/Footer';
import Contact from './componnents/Contact/Contact';
import CityDetails from './componnents/CityDetails';

function App() {
  return (
    <div className="page-container">
       <div className="content-wrap">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Destination" element={<Destination />} />
        <Route path="/Reservation" element={<Reservation />} />
        <Route path="/Activity" element={<Activity />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/CityDetails" element={<CityDetails />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/PaymentDetails' element={<PaymentDetails />} />
      </Routes>
  
      
    </Router>
    </div>
    </div>
  );
}

export default App;
