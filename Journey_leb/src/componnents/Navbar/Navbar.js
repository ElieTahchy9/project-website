import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar = () => {
  
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  return (
    <nav className="bg-[#FFBA00] p-6 flex flex-row justify-between r">
      <div> 
        <Link to="/" className='btn btn-Dark'><i class="bi bi-house-fill"></i> Home</Link>
        <Link to="/Destination" className='btn btn-Dark'><i className="bi bi-geo-alt-fill"></i> Destination</Link>
        <Link to="/Reservation" className='btn btn-Dark'><i class="bi bi-calendar2-week-fill"></i> Reservation</Link>
        <Link to="/Activity" className='btn btn-Dark'><i class="bi bi-award-fill"></i> Activity</Link>
        <Link to="/About" className='btn btn-Dark'><i class="bi bi-info-circle-fill"></i> About</Link>
        <Link to="/Contact" className='btn btn-Dark'><i class="bi bi-person-lines-fill"></i> Contact</Link>
        <Link to="/CityDetails" className='btn btn-Dark'>City Details</Link>
      </div>
      
      <div className="d-flex align-items-center">
        <div className="mr-3">
          <Link to="/Login" className="btn btn-danger">Log in</Link>
        </div>
        <div>
          <Link to="/Signup" className="btn btn-danger">Sign up</Link>
        </div>

        {/* Bootstrap Search Button */}
        <div className="ml-3">
          <button
            className="btn btn-outline-secondary"
            onClick={handleSearchClick}
          >
            <i class="bi bi-search"></i> Search <i class="bi bi-binoculars-fill"></i>
          </button>
        </div>
      </div>

      {/* Bootstrap Search Input */}
      {showSearch && (
        <div className="ml-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
