import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Reservation = () => {
  // Assuming reservation details
  const reservationDetails = {
    activities: [
      { name: 'Hiking', description: 'Enjoy a scenic hike', cost: 20 },
      { name: 'Swimming', description: 'Relax by the pool', cost: 15 },
      { name: 'Rafting', description: 'Thrilling rafting experience', cost: 25 },
    ],
    startDate: '2023-01-01',
    endDate: '2023-01-03',
  };

  // Calculate total cost
  const totalCost = reservationDetails.activities.reduce((total, activity) => total + activity.cost, 0);

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header bg-success text-white">
          <h2 className="text-2xl font-bold mb-0">Reservation Details</h2>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>Activity</th>
                <th>Description</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              {reservationDetails.activities.map((activity, index) => (
                <tr key={index}>
                  <td>{activity.name}</td>
                  <td>{activity.description}</td>
                  <td>{reservationDetails.startDate}</td>
                  <td>{reservationDetails.endDate}</td>
                  <td>${activity.cost.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="text-right">
            <p className="font-weight-bold">Total Cost: ${totalCost.toFixed(2)}</p>
          </div>

          <Link to="/PaymentDetails" className="btn btn-success">
          Click here to confirm reservation
        </Link>        
        </div>
      </div>
    </div>
  );
};

export default Reservation;
