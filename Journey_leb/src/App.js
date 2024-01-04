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
import Saida from './componnents/CityDetails/Saida';
import Jbeil from './componnents/CityDetails/Jbeil';
import Zahle from './componnents/CityDetails/Zahle';
import Baalbak from './componnents/CityDetails/Baalbak';
import Bcharre from './componnents/CityDetails/Bcharre';
import Faraya from './componnents/CityDetails/Faraya';
import Laqlouq from './componnents/CityDetails/Laqlouq';
import Harissa from './componnents/CityDetails/Harissa';
import Batroun from './componnents/CityDetails/Batroun';
import Qoubayat from './componnents/CityDetails/Qoubayat';
import Beirut from './componnents/CityDetails/Beirut';
import ActivitySaida from './componnents/ActivityDetails/Saida/ActivitySaida';
import SecondActivitySaida from './componnents/ActivityDetails/Saida/SecondActivitySaida';
import ActivityJbeil from './componnents/ActivityDetails/Jbeil/ActivityJbeil';
import SecondActivityJbeil from './componnents/ActivityDetails/Jbeil/SecondActivityJbeil';
import ActivityQoubayat from './componnents/ActivityDetails/Qoubayat/ActivityQoubayat';
import SecondActivityQoubayat from './componnents/ActivityDetails/Qoubayat/SecondActivityQoubayat';
import ThirdActivityQoubayat from './componnents/ActivityDetails/Qoubayat/ThirdActivityQoubayat';

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
        <Route path="/cityDetails/Saida" element={<Saida />} />
        <Route path="/cityDetails/Jbeil" element={<Jbeil />} />
        <Route path="/cityDetails/Zahle" element={<Zahle />} />
        <Route path="/cityDetails/Baalbak" element={<Baalbak />} />
        <Route path="/cityDetails/Bcharre" element={<Bcharre />} />
        <Route path="/cityDetails/Faraya" element={<Faraya />} />
        <Route path="/cityDetails/Laqlouq" element={<Laqlouq/>} />
        <Route path="/cityDetails/Harissa" element={<Harissa/>} />
        <Route path="/cityDetails/Batroun" element={<Batroun/>} /> 
        <Route path="/cityDetails/Qoubayat" element={<Qoubayat/>} /> 
        <Route path="/cityDetails/Beirut" element={<Beirut/>} />
        <Route path="/activity/Saida/1" element={<ActivitySaida />} />
        <Route path="/activity/Saida/2" element={<SecondActivitySaida />} />
        <Route path="/activity/Jbeil/1" element={<ActivityJbeil />} />
        <Route path="/activity/Jbeil/2" element={<SecondActivityJbeil />} /> 
        <Route path="/activity/Qoubayat/1" element={<ActivityQoubayat />} /> 
        <Route path="/activity/Qoubayat/2" element={<SecondActivityQoubayat />} /> 
        <Route path="/activity/Qoubayat/3" element={<ThirdActivityQoubayat />} /> 

      </Routes>
  
      
    </Router>
    </div>
    </div>
  );
}

export default App;
