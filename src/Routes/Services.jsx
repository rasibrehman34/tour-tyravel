import React from "react";
import Navbar from "../components/navbar/Navbar.jsx";
import Hero from "../components/Hero/Hero.jsx";
import hero3 from "../assets/tourtravelImgs/hero3.jpg";
import Footer from '../components/Footer/Footer.jsx'
import Trip from "../components/Trip/Trip.jsx";

const Services = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="Hero-contact"
        heroImg={hero3}
        title="Services"
        url="/service"
        btnText="service"
        btnClass="show"
      />
      <Trip />
      <Footer />
    </div>
  );
};

export default Services;
