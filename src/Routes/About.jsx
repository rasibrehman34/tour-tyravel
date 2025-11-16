import React from 'react'
import Navbar from '../components/navbar/Navbar.jsx'
import Hero from '../components/Hero/Hero.jsx'
import group4 from '../assets/group4.jpg'
import Footer from '../components/Footer/Footer.jsx'
import AboutUs from '../components/AboutUs/AboutUs.jsx'

const About = () => {
  return (
     <div>
      <Navbar />
        <Hero
        cName="Hero-mid" 
        heroImg={group4}
        title="your journey your story"
       url="/about"/>

        <AboutUs />
        <Footer />
    </div>

    
  )
}

export default About
