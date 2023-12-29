import React, { useState } from 'react';
import { Carousel, Container, Row, Col, Button, Accordion} from 'react-bootstrap';
import { FaQuestionCircle } from 'react-icons/fa';
import SubscribeForm from './SubscribeForm';
import './Home.css';

const Home = () => {
  const [showSubscribeForm, setShowSubscribeForm] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);

  const handleSubscribe = (email) => {
    // Handle subscription logic here
    // For demonstration purposes, set subscriptionStatus to 'success' after submission
    setSubscriptionStatus('success');
    handleCloseSubscribeForm();
  };

  const handleShowSubscribeForm = () => {
    setShowSubscribeForm(true);
  };

  const handleCloseSubscribeForm = () => {
    setShowSubscribeForm(false);
  };

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQ_wxV9vu3vfs2edPIqJknBKHJCHprkbbroTuYIscahhWlheqsOKlEkknUVcVErHpraiDFOXmdnqbD94wlODSTQDmDYpdLkG_gHDAT8wQ"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Where to go in 2024</h3>
            <p>Ideas to kick-start discover LEBANON planning—just save what you love, and you’re off..</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS6oNq2W3dMz_sdm9FYZp6wccZeQif_c_2-SnwEaUlC5IzD8IDQQ-EZMWNgayiAZKwAUIYeujB9h3yJZfDIvGmLWbKwRC4c3sC0HZ8JQw "
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Where to go in 2024</h3>
            <p>Ideas to kick-start discover LEBANON planning—just save what you love, and you’re off..</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTvszv9irHlhil9GAQQeB0waQO6dLqe30c-sEGp2bQ7oj482Tykzhhuu5sUR8xpn9304up9bk4FojFtqBTr0PLnDvDb3Hd3oHPB_Tkyfg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Where to go in 2024</h3>
            <p>Ideas to kick-start discover LEBANON planning—just save what you love, and you’re off..</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRyyGwnNbD-dS8Q8aSEqvOqiiq8mvUdFSAvqQIDkqyHwNc1hGVtbh2aGGkc40d1AveMUvuWEZ2urKFkjxHycw6I1w679Nvjif4RUtng0g"
            alt="fourth slide"
          />
          <Carousel.Caption>
            <h3>Where to go in 2024</h3>
            <p>Ideas to kick-start discover LEBANON planning—just save what you love, and you’re off..</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQHQv3nm_SXCbZE-gfk_LkhebZik9MgZAc1LDfSssApdbRVV41mjjgMrQt2ZZjjGe6_tUlYg1Z4M_eAOJQIbO1aAfEkWPVreZ2wLgJ1Uw"
            alt="Fifth slide"
          />
          <Carousel.Caption>
            <h3>Where to go in 2024</h3>
            <p>Ideas to kick-start discover LEBANON planning—just save what you love, and you’re off..</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>




      {/* Newsletter */}
      <div className="d-flex justify-center h-20 my-2 bg-danger text-white">
        <Container className="mt-1">
          <Row className="justify-content-center">
            <Col md={6}>
              <Button type="button" onClick={handleShowSubscribeForm}>
                Subscribe
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Subscribe Form */}
      <SubscribeForm
        show={showSubscribeForm}
        handleClose={handleCloseSubscribeForm}
        handleSubscribe={handleSubscribe}
      />

      {/* Boxes */}
      <Container className="mt-5">
        <Row>
          <Col md={4}>
            <div className="box text-center bordered-box p-0">

              <h3>
                <img
                  src="https://img.freepik.com/free-vector/hand-drawn-swimming-logo-template_23-2149360927.jpg?size=626&ext=jpg&ga=GA1.2.875312272.1677414807&semt=ais"
                  alt="Logo"
                  className="img-fluid rounded shadow"
                />
                <div className="mt-3"> Beach</div>
              </h3>
              <p>Box 1 content goes here.</p>
              <button className="btn btn-primary mb-3">Read More</button>
            </div>
          </Col>
          <Col md={4}>
            <div className="box text-center bordered-box p-0">

              <h3>
                <img
                  src="https://img.freepik.com/premium-vector/badge-mountain-explore-adventure-logo-design_527727-104.jpg?size=626&ext=jpg&ga=GA1.1.875312272.1677414807&semt=ais"
                  alt="Logo"
                  className="img-fluid rounded shadow"
                />
                <div className="mt-3">Hiking</div>
              </h3>
              <p>Box 2 content goes here.</p>
              <button className="btn btn-danger mb-3">Read More</button>
            </div>
          </Col>
          <Col md={4}>
            <div className="box text-center bordered-box shadow-lg p-0">

              <h3>
                <img
                  src="https://img.freepik.com/free-vector/bicycle-logo-template-design_23-2150332056.jpg?size=626&ext=jpg&ga=GA1.1.875312272.1677414807&semt=ais"
                  alt="Logo"
                  className="img-fluid rounded"
                />
                <div className="mt-3"> Cycling </div>
              </h3>
              <p>Box 3 content goes here.</p>
              <button className="btn btn-primary mb-3">Read More</button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* F.A.Q */}
      <Container className="mt-5">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <FaQuestionCircle />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, doloremque.
            </Accordion.Header>
            <Accordion.Body>Answer to F.A.Q 1.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <FaQuestionCircle /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, ducimus?
            </Accordion.Header>
            <Accordion.Body>Answer to F.A.Q 2.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <FaQuestionCircle /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, laudantium.
            </Accordion.Header>
            <Accordion.Body>Answer to F.A.Q 3.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <FaQuestionCircle /> Frequently Asked Question 4
            </Accordion.Header>
            <Accordion.Body>Answer to F.A.Q 4.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              <FaQuestionCircle /> Frequently Asked Question 5
            </Accordion.Header>
            <Accordion.Body>Answer to F.A.Q 5.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              <FaQuestionCircle /> Frequently Asked Question 6
            </Accordion.Header>
            <Accordion.Body>Answer to F.A.Q 6.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              <FaQuestionCircle /> Frequently Asked Question 7
            </Accordion.Header>
            <Accordion.Body>Answer to F.A.Q 7.</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>

  );
};

export default Home;
