import React from 'react'
import './Trip.css'
import TripData from './TripData'
import img1 from '../../assets/tourtravelImgs/indoneshia.jpg'
import img2 from '../../assets/tourtravelImgs/malaysia.jpg'
import img3 from '../../assets/tourtravelImgs/thailand.jpg'
const Trip = () => {
  return (
    <div className='trip'>
        <h1>Recent trip</h1>
        <p>Some recent trips we cover in below grid.</p>
        <div className="tripcard">

        <TripData
        image={img1}
        heading="Trip in China"
        paragraph="China is a land where ancient traditions blend beautifully with modern innovation. From the majestic Great Wall of China to the peaceful Temples of Beijing, and from the futuristic skyline of Shanghai to the breathtaking natural beauty of Zhangjiajie and Guilin, every moment in China feels extraordinary. Enjoy delicious Chinese cuisine, explore vibrant local markets, and discover centuries-old history and culture. Whether you are looking for adventure, culture, shopping, or relaxation, our China Tour Packages offer a complete, unforgettable experience tailored just for you. Let us take care of everything — flights, hotels, transport, and guided tours — so you can simply enjoy your dream trip to China."
         />

        <TripData
        image={img2}
        heading="Trip in Malaysia"
        paragraph="Malaysia is a vibrant destination where modern city life meets lush natural beauty. From the iconic Petronas Twin Towers in Kuala Lumpur to the scenic highlands of Genting and Cameron, and from the stunning beaches of Langkawi to the cultural richness of Malacca, Malaysia offers something for every traveler. Enjoy world-class shopping, delicious Malaysian cuisine, exciting theme parks, and breathtaking landscapes — all in one trip. Our Malaysia Tour Packages include comfortable hotels, easy transportation, guided sightseeing, and hassle-free planning, so you can relax and enjoy a perfect vacation. Let us make your Malaysia journey unforgettable."
         />

        <TripData
        image={img3}
        heading="Trip in Thailand"
        paragraph="Thailand is a tropical paradise known for its crystal-clear beaches, vibrant nightlife, rich culture, and warm hospitality. From the stunning shores of Phuket and Krabi, to the colorful streets and floating markets of Bangkok, and the peaceful temples of Chiang Mai, every corner of Thailand offers something unforgettable. Enjoy delicious Thai cuisine, exciting island-hopping adventures, luxury resorts, and thrilling water activities. Our Thailand Tour Packages are designed to give you the perfect blend of relaxation, adventure, and cultural exploration. Let us handle your flights, hotels, transport, and guided tours — your dream vacation in Thailand starts here."
         />
        </div>


      
    </div>
  )
}

export default Trip
