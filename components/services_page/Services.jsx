import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.css';

function ServicesPage() {
  return (
    <>
         <div className="services-body">
        <div className="services-container">
      <h2>Our Services</h2>
      <p className="services-description">
      Your Premier Property Destination in the United Kingdom! Explore the epitome of real estate excellence with our curated selection of top-tier properties across the UK.
       From charming cottages to luxurious estates, Swiftstatesales offers a spectrum of unparalleled listings that redefine sophistication and comfort.
       Discover a world of exceptional services tailored to your property needs, all on one platform. Elevate your real estate journey with Swiftstatesales today!"
      </p>
      <div className="services-list-container">
        <ul className="services-list">
          <li>Property Sales</li>
          <li>Apartment Rentals</li>
          <li>Consultation Services</li>
          <li>Property Management</li>
          <li>Property Valuation</li>
        </ul>
      </div>
    </div>
    </div>
    </>
  );
}

export default ServicesPage;
