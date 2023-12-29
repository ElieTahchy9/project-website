import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const CityDetails = () => {
  const cityData = {
    name: 'Sample City',
    region: 'Sample Region',
    description: 'A beautiful city with a rich history and vibrant culture.',
    image: 'https://www.shutterstock.com/image-photo/aerial-photo-zaitunay-bay-beirut-600nw-1749522632.jpg',
    activities: [
      { name: 'Hiking', image: 'https://th.bing.com/th?id=OIP.6AnBWiCfKD-HueplmBxHcgHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' },
      { name: 'Swimming', image: 'https://th.bing.com/th?id=OIP.3D568j1U1s1DpOzSgm5ZSQHaEw&w=311&h=200&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' },
      { name: 'Rafting', image: 'https://th.bing.com/th?id=OIP.LgiI-pawaQb1Jrs5Q3zNkQHaF7&w=279&h=223&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' },
      { name: 'Cycling', image: 'https://th.bing.com/th?id=OIP.4r9yDKzRLFYHZf8g0KC_pQHaEv&w=312&h=199&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' },
      { name: 'Sightseeing', image: 'https://th.bing.com/th?id=OIP.SSlQmNy6Hp3dRwd3b15ASAHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' },
      { name: 'Shopping', image: 'https://th.bing.com/th?id=OIP.jfylXkiYoX1RzTnyyZ1lsAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' },
    ],
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={cityData.image}
            alt={cityData.name}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h2 className="text-2xl font-bold mb-4">{cityData.name}</h2>
          <p className="text-gray-700 mb-4">
            <strong>Region:</strong> {cityData.region}
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Description:</strong> {cityData.description}
          </p>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-12">
          <h3 className="text-xl font-bold mb-3">Available Activities:</h3>
          <div className="row">
            {cityData.activities.map((activity, index) => (
              <div key={index} className="col-md-4 mb-3">
                <Link to={`/activity/${activity.name}`} className="text-decoration-none">
                  <div className="card">
                    <img
                      src={activity.image}
                      alt={activity.name}
                      className="card-img-top img-fluid"
                      style={{ height: '150px' }} // Set a fixed height for consistency
                    />
                    <div className="card-body">
                      <h5 className="card-title">{activity.name}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityDetails;
