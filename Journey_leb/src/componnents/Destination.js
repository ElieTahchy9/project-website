import React from 'react';
import { Carousel } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const imageSrc = 'https://www.nationsonline.org/gallery/Lebanon/Downtownbeirut.jpg';

const Destination = () => {
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



  
      <div className="flex items-center justify-center h-12 my-3 bg-gray-800">
  <h1 className="text-white text-4xl font-bold stroke-text">Please select a city</h1>
    </div>

      <Container>
  {/* Row 1 */}
  <Row >
    <Col><img src={imageSrc} alt="Image 1" className="img-fluid mb-3" />
    <div>         
    <Row>
    <Col className="d-flex justify-content-end mt-3">
      <Button className='mb-3' variant="danger"> select </Button>
    </Col>
      </Row>
</div> 
    </Col>
    <Col><img src={imageSrc} alt="Image 2" className="img-fluid mb-3" />
    <div>         
    <Row>
    <Col className="d-flex justify-content-end mt-3">
      <Button  variant="danger"> select </Button>
    </Col>
      </Row>
</div> 
    </Col>
    <Col><img src={imageSrc} alt="Image 3" className="img-fluid mb-3" />
    <div>         
    <Row>
    <Col className="d-flex justify-content-end mt-3">
      <Button variant="danger"> select </Button>
    </Col>
      </Row>
</div> 
    </Col>
    <Col><img src={imageSrc} alt="Image 4" className="img-fluid mb-3" />
    <div>         
    <Row>
    <Col className="d-flex justify-content-end mt-3">
      <Button variant="danger"> select </Button>
    </Col>
      </Row>
</div> 
    </Col>
  </Row>

  {/* Row 2 */}
  <Row>
    <Col><img src={imageSrc} alt="Image 1" className="img-fluid mb-3" />
    <div>         
    <Row>
    <Col className="d-flex justify-content-end mt-3">
      <Button className='mt-3' variant="danger"> select </Button>
    </Col>
      </Row>
</div> 
    </Col>
    <Col><img src={imageSrc} alt="Image 2" className="img-fluid mb-3" />

    <div>         
    <Row>
    <Col className="d-flex justify-content-end mt-3">
      <Button className=" mt-3 " variant="danger"> select </Button>
    </Col>
      </Row>
</div> 
    </Col>
    <Col><img src={imageSrc} alt="Image 3" className="img-fluid mb-3" />
    <div>         
    <Row>
    <Col className="d-flex justify-content-end mt-3">
      <Button variant="danger"> select </Button>
    </Col>
      </Row>
</div> 
    </Col>
    <Col><img src={imageSrc} alt="Image 4" className="img-fluid mb-3" />
    
    <div>         
    <Row>
    <Col className="d-flex justify-content-end mt-3">
      <Button variant="danger"> select </Button>
    </Col>
      </Row>
</div> 
    </Col>
  </Row>

  {/* Row 3 */}
  <Row>
    <Col><img src={imageSrc} alt="Image 1" className="img-fluid mb-3" />  <div>         
    <Row>
    <Col className="d-flex justify-content-end mt-3">
      <Button className=" mb-3 " variant="danger"> select </Button>
    </Col>
      </Row>
</div>   </Col>    
    
    <Col><img src={imageSrc} alt="Image 2" className="img-fluid mb-3" /> <div>         
    <Row>
    <Col className="d-flex justify-content-end mt-3">
      <Button variant="danger"> select </Button>
    </Col>
      </Row>
</div> </Col>
    <Col><img src={imageSrc} alt="Image 3" className="img-fluid mb-3" /> <div>         
    <Row>
    <Col className="d-flex justify-content-end mt-3">
      <Button variant="danger"> select </Button>
    </Col>
      </Row>
</div> </Col>
    <Col><img src={imageSrc} alt="Image 4" className="img-fluid mb-3" /> <div>         
    <Row>
    <Col className="d-flex justify-content-end mt-3">
      <Button variant="danger"> select </Button>
    </Col>
      </Row>
</div> </Col>
  </Row>

  {/* Row 4 */}
  <Row>
    <Col><img src={imageSrc} alt="Image 1" className="img-fluid mb-3" /> <div>         
    <Row>
    <Col className="d-flex justify-content-end mt-3">
      <Button variant="danger"> select </Button>
    </Col>
      </Row>
</div> </Col>
    <Col><img src={imageSrc} alt="Image 2" className="img-fluid mb-3" /> <div>         
    <Row>
    <Col className="d-flex justify-content-end mt-3">
      <Button variant="danger"> select </Button>
    </Col>
      </Row>
</div> </Col>
    <Col><img src={imageSrc} alt="Image 3" className="img-fluid mb-3" /> <div>         
    <Row>
    <Col className="d-flex justify-content-end mt-3">
      <Button variant="danger"> select </Button>
    </Col>
      </Row>
</div> </Col>
    <Col><img src={imageSrc} alt="Image 4" className="img-fluid mb-3" /> <div>         
    <Row>
    <Col className="d-flex justify-content-end mt-3">
      <Button variant="danger"> select </Button>
    </Col>
      </Row>
</div> </Col>
  </Row>  

  <Row>
    <Col className="d-flex justify-content-end mt-3">
      <Button variant="danger"> all cities </Button>
    </Col>
  </Row>
</Container>

    
  </div>;
};

export default Destination;
