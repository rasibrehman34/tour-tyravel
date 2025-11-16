import React from 'react'
import './Destination.css'
import DestinationData from './DestinationData.jsx'
import img1 from "../../assets/tourtravelImgs/img1.jpg";
import img2 from "../../assets/tourtravelImgs/img2.jpg";
import img3 from "../../assets/tourtravelImgs/img3.jpg"
import img4 from "../../assets/tourtravelImgs/img4.jpg"



const Destination = () => {
  return (
    <div className='destination'>
        <h1>Popular Destinations</h1>
        <p>Tour gives you the opportnity to see alot.</p>

        <DestinationData
        className="first-des"
        heading="Thailand" 
        text="A trip to Thailand offers a mix of vibrant culture, delicious food, and stunning scenery, from the bustling streets of Bangkok to the tranquil beaches of the south and temples of the north. It's known for being a relaxed and friendly country with world-class cuisine, but the heat and sensory overload of cities can be intense for first-time visitors. You can find everything from ornate temples and bustling markets to serene landscapes."
        img1={img1}
        img2={img2}/>
        
         <DestinationData
        className="first-des-reverse"
        heading="China" 
        text="China is a land where ancient traditions blend beautifully with modern innovation. From the majestic Great Wall of China to the peaceful Temples of Beijing, and from the futuristic skyline of Shanghai to the breathtaking natural beauty of Zhangjiajie and Guilin, every moment in China feels extraordinary. Enjoy delicious Chinese cuisine, explore vibrant local markets, and discover centuries-old history and culture. Whether you are looking for adventure, culture, shopping, or relaxation, our China Tour Packages offer a complete, unforgettable experience tailored just for you. Let us take care of everything — flights, hotels, transport, and guided tours — so you can simply enjoy your dream trip to China."
        img1={img3}
        img2={img4}/>
        
    </div>
  )
}
 
export default Destination
