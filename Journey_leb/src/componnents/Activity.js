import React, { useState } from 'react';
import { Carousel, Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { left, right } from '@popperjs/core';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Activitydetails = {
  name: 'sample activity',
  city: 'City Name',
  description: 'This is a sample activity description.',
  image: 'https://th.bing.com/th?id=OIP.6AnBWiCfKD-HueplmBxHcgHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
  location: [
    { location: 'Location 1', image: 'https://th.bing.com/th/id/OIP.KkaF0Zu3Y21AL1ogirNJ3gHaE8?rs=1&pid=ImgDetMain' },
    { location: 'Location 2', image: 'https://www.travel-pictures-gallery.com/images/greece/east-crete/east-crete-0020.jpg' },
    { location: 'Location 3', image: 'https://th.bing.com/th/id/OIP.Bnd4Oau7erGcPphIiA9GwwHaE6?w=1024&h=680&rs=1&pid=ImgDetMain' },
    { location: 'Location 4', image: 'https://th.bing.com/th/id/OIP.Jq-F6uIV0kkoWqBWO1UXZAHaEK?rs=1&pid=ImgDetMain' },
    { location: 'Location 5', image: 'https://th.bing.com/th/id/OIP.Jq-F6uIV0kkoWqBWO1UXZAHaEK?rs=1&pid=ImgDetMain' },
    { location: 'Location 6', image: 'https://th.bing.com/th/id/OIP.Jq-F6uIV0kkoWqBWO1UXZAHaEK?rs=1&pid=ImgDetMain' },
    // Add more locations as needed
  ],
};


const Activity = () => {

  const [selectedDate, setSelectedDate] = useState(null);
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handlePeopleChange = (e) => {
    setNumberOfPeople(e.target.value);
  };

  return <div>
    <Carousel>
  <Carousel.Item>
  <div className="row">
   <div className="col-md-24">
    <img
      className="d-block w-full"
      src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQ_wxV9vu3vfs2edPIqJknBKHJCHprkbbroTuYIscahhWlheqsOKlEkknUVcVErHpraiDFOXmdnqbD94wlODSTQDmDYpdLkG_gHDAT8wQ"
      alt="First slide"
    />
  </div>
    </div>
    <Carousel.Caption>
      <h3>Where to go in 2024</h3>
      <p>Ideas to kick-start discover LEBANON planning—just save what you love, and you’re off..</p>
    </Carousel.Caption>
  </Carousel.Item>
 {/*Slide 2 */}
  <Carousel.Item>
  <div className="row">
   <div className="col-md-24">
    <img
      className="d-block w-full"
      src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS6oNq2W3dMz_sdm9FYZp6wccZeQif_c_2-SnwEaUlC5IzD8IDQQ-EZMWNgayiAZKwAUIYeujB9h3yJZfDIvGmLWbKwRC4c3sC0HZ8JQw "
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Where to go in 2024</h3>
      <p>Ideas to kick-start discover LEBANON planning—just save what you love, and you’re off..</p>
    </Carousel.Caption>
    </div>
    </div>
  </Carousel.Item>
   {/*Slide 3 */}
   <Carousel.Item>
   <div className="row">
   <div className=" w-60 col-md-24">
    <img
      className="d-block w-full"
      src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTvszv9irHlhil9GAQQeB0waQO6dLqe30c-sEGp2bQ7oj482Tykzhhuu5sUR8xpn9304up9bk4FojFtqBTr0PLnDvDb3Hd3oHPB_Tkyfg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Where to go in 2024</h3>
      <p>Ideas to kick-start discover LEBANON planning—just save what you love, and you’re off..</p>
    </Carousel.Caption>
    </div>
    </div>
  </Carousel.Item>
    {/*Slide 4*/}
    <Carousel.Item>
   <div className="row">
   <div className=" w-60 col-md-24">
    <img
      className="d-block w-full"
      src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRyyGwnNbD-dS8Q8aSEqvOqiiq8mvUdFSAvqQIDkqyHwNc1hGVtbh2aGGkc40d1AveMUvuWEZ2urKFkjxHycw6I1w679Nvjif4RUtng0g"
      alt="fourth slide"
    />
    <Carousel.Caption>
      <h3>Where to go in 2024</h3>
      <p>Ideas to kick-start discover LEBANON planning—just save what you love, and you’re off..</p>
    </Carousel.Caption>
    </div>
    </div>
  </Carousel.Item>
   {/*Slide 5*/}
   <Carousel.Item>
   <div className="row">
   <div className=" w-60 col-md-24">
    <img
      className="d-block w-full"
      src="
      https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQHQv3nm_SXCbZE-gfk_LkhebZik9MgZAc1LDfSssApdbRVV41mjjgMrQt2ZZjjGe6_tUlYg1Z4M_eAOJQIbO1aAfEkWPVreZ2wLgJ1Uw"
      alt="fifth slide"
    />
    <Carousel.Caption>
      <h3>Where to go in 2024</h3>
      <p>Ideas to kick-start discover LEBANON planning—just save what you love, and you’re off..</p>
    </Carousel.Caption>
    </div>
    </div>
  </Carousel.Item>
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

     <div >
     <div className="flex">
      <img className="w-1/3 mt-3 mb-3" src={Activitydetails.image} alt="Activity" />
      <div className="w-2/3 pl-4">
        <h2 className="text-xl font-bold">{Activitydetails.name}</h2>
        <p>{Activitydetails.city}</p>
        <p>{Activitydetails.description}</p>
        <h1 className="text-lg font-bold mt-2">Available locations:</h1>
        <div className="grid grid-cols-3 gap-4 mt-3 mb-3 ">
          {Activitydetails.location.map((loc, index) => (
            <div key={index} className="group relative">
              <img src={loc.image} alt={`Location ${index}`} className="w-full" />
              <p className="absolute bottom-0 bg-black text-white p-1">{loc.location}</p>

            </div>
          ))}
        </div>
      </div>
    </div>

     </div>


 </div>;
 
};



export default Activity; 
