import React from 'react'
import Hero from '../components/Hero/Hero'
import group4 from '../assets/group4.jpg'
import Navbar from '../components/navbar/Navbar.jsx'
import Destination from '../components/Destination/Destination.jsx'
import Trip from '../components/Trip/Trip.jsx'
import Footer from '../components/Footer/Footer.jsx'

const Home = () => (
  <div>
    <Navbar />
    <Hero
      cName="Hero"
      heroImg={group4}
      title="your journey your story"
      text="Choose Your Favourite Destination."
      btnText="Travel Plan"
      url="/"
      btnClass="show" />

    <Destination />
    <Trip />
    <Footer />
  </div>
)

export default Home
