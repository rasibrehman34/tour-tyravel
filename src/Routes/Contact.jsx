import React from "react";
import Navbar from "../components/navbar/Navbar.jsx";
import Hero from "../components/Hero/Hero.jsx";
import group4 from "../assets/group4.jpg";
import Footer from '../components/Footer/Footer.jsx'
import ContactUs from "../components/ContactUs/ContactUs.jsx";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="Hero-contact"
        heroImg={group4}
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
