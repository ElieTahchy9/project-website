import React, { useState,useEffect } from 'react';
import { Carousel, Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const API_URL = 'http://localhost:5000/api/images/all';



const ThirdActivityQoubayat = () => {

const [selectedDate, setSelectedDate] = useState(null);
const [numberOfPeople, setNumberOfPeople] = useState(1);
const [cities, setCities] = useState([]);
const {  cityName, activityId } = useParams();
const [activityDetails, setActivityDetails] = useState({});

const fetchActivityDetails = async () => {
try {
    const response = await fetch('http://localhost:5000/api/city/1/activity-details'); // Replace 'your_city_id' with the actual city ID
    const data = await response.json();
    setActivityDetails(data);
} catch (error) {
    console.error('Error fetching activity details:', error);
}
};

useEffect(() => {
fetchActivityDetails();
console.log('Activity Details:', activityDetails);
}, []); 




useEffect(() => {
// Fetch data from the API
fetch(API_URL)
    .then((response) => response.json())
    .then((data) => setCities(data))
    .catch((error) => console.error('Error fetching images:', error));
}, []);

if (cities.length === 0) {
return <div>Loading...</div>; // Display a loading message while data is being fetched
}

const handleDateChange = (date) => {
setSelectedDate(date);
};

const handlePeopleChange = (e) => {
setNumberOfPeople(e.target.value);
};

return <div>

<Carousel>
    {cities.map((city) => (
    <Carousel.Item key={city.ID_city}>
        <div className="row">
        <div className="col-md-24">
            <img
            className="d-block w-full"
            src={`http://localhost:5000/images/${city.Name_city.toLowerCase()}.jpg`}
            alt={city.Name_city}
            />
        </div>
        </div>
        <Carousel.Caption>
        <h3>{city.Name_city}</h3>
        <p>{city.Description_city}</p>
        </Carousel.Caption>
    </Carousel.Item>
    ))}
</Carousel>


{/* Calendar and Input Fields */}
<div className="my-4">
    <h2>Select Activity Day and Number of People</h2>
    <Form>
        <Form.Group controlId="formDate">
        <Form.Label>Activity Day:</Form.Label>
        <DatePicker selected={selectedDate} onChange={handleDateChange} dateFormat="MM/dd/yyyy" />
        </Form.Group>

        <Form.Group controlId="formPeople">
        <Form.Label>Number of People:</Form.Label>
        <Form.Control type="number" value={numberOfPeople} onChange={handlePeopleChange} />
        </Form.Group>
    </Form>
    </div>


    <div>
    <h1>Available locations : </h1>
      <h2>Cycling </h2>
      <Card style={{ width: '18rem' }}>
      <Link to="https://www.wikiloc.com/trails/hiking/lebanon/aakkar/qoubaiyat" target="_blank" rel="noopener noreferrer">
        <Card.Img variant="top" src={'http://localhost:5000/Images/ActivityQoubayatHiking.jpg'} />    
        </Link>
        <Card.Body>
          <Card.Title>Activity Card</Card.Title>
          <Card.Text>
            This is a sample card for the activity image.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

</div>;

};



export default ThirdActivityQoubayat; 
