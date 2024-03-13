// HomePage.jsx
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './HomePage.css';

const HomePage = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>  
          <img
            className="d-block w-100"
            src="/src/components/CarouselImage/p21.jpg"
            alt="First slide"
            style={{ maxHeight: '600px' }}
          />
          <Carousel.Caption>
            <p>Buy Apartmnts </p>
            <p>Get the best apartments in your city</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/src/components/CarouselImage/p22.jpg"
            alt="Second slide"
            style={{ maxHeight: '600px' }}
          />
          <Carousel.Caption>
            <p>Rent Villas</p>
            <p>Get the best modern style villas in your area.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/src/components/CarouselImage/p23.jpg"
            alt="Third slide"
            style={{ maxHeight: '600px' }}
          />
          <Carousel.Caption>
            <p>Best customer services</p>
            <p>Our mission is to provide our customers with high quality properties and services</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container fluid>
       <Row className="justify-content-center my-5">
          <div className="col-md-8">
            <h2 className="text-center">Where Your Journey To Home Begins?</h2>
            <p className="text-center">
            Discover Unrivaled Apartments and Houses in Prime City Locations with Swiftstatesales! Your ultimate destination for premium properties, 
            offering top-tier residences in the most coveted areas of your city. More than just a real estate website, Swiftstatesales is your partner in finding not just properties,
             but homes. Browse through our webpage to unearth the ideal property that resonates with your definition of 'home'
            </p>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
