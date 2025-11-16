import React from "react";
import Navbar from "../components/navbar/Navbar.jsx";
import Hero from "../components/Hero/Hero.jsx";
import hero2 from "../assets/tourtravelImgs/hero2.jpg";
import Footer from '../components/Footer/Footer.jsx'
import ContactUs from "../components/ContactUs/ContactUs.jsx";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="Hero-contact"
        heroImg={hero2}
        title="Contact"
        url="/contact"
        btnText="Contact Us"
        btnClass="show"
      />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Contact;
