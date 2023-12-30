import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Harissa = () => {
  const [cityData, setCityData] = useState({});
  const [activityUrls, setActivityUrls] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch city information
        const cityResponse = await fetch('http://localhost:5000/api/images/harissa');
        const cityData = await cityResponse.json();
        setCityData(cityData);

        // Fetch activity URLs
        const activityResponse = await fetch('http://localhost:5000/api/city/8/activity-urls');
        const activityUrls = await activityResponse.json();
        setActivityUrls(activityUrls);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      {/* Render city information */}
      <div className="row">
        <div className="col-md-6">
          <img
            src={`http://localhost:5000/${cityData.city_url}`}
            alt={cityData.Name_city}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h2 className="text-2xl font-bold mb-4">{cityData.Name_city}</h2>
          <p className="text-gray-700 mb-4">
            <strong>Region:</strong> {cityData.Region_city}
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Description:</strong> {cityData.Description_city}
          </p>
        </div>
      </div>

      {/* Render activity URLs */}
      <div className="row mt-4">
        <div className="col-md-12">
          <h3 className="text-xl font-bold mb-3">Available Activities:</h3>
          <div className="row">
            {Object.values(activityUrls).map((activity, index) => (
              activity !== null && (
                <div key={index} className="col-md-4 mb-3">
                  <Link to={`/activity/${index + 1}`} className="text-decoration-none">
                    <div className="card">
                      <img
                        src={`http://localhost:5000/${activity}`}
                        alt={`Activity ${index + 1}`}
                        className="card-img-top img-fluid"
                        style={{ height: '150px' }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{`Activity ${index + 1}`}</h5>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Harissa;
