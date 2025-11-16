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
        heading="Tall" 
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dolor eum accusantium aliquid culpa, ea ipsa laboriosam laudantium! Eveniet exercitationem, mollitia ipsum dolorem culpa fugit maiores nisi. Doloribus in iusto ullam amet quae consectetur? Error consectetur, harum voluptatum illum illo ipsa totam perspiciatis quia aliquid amet nulla dolorum! Minima nemo accusamus, enim, aliquid placeat doloremque quidem accusantium, voluptatibus facere quod dolores aut nesciunt iste esse cumque exercitationem doloribus qui odio"
        img1={img1}
        img2={img2}/>
        
         <DestinationData
        className="first-des-reverse"
        heading="short" 
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dolor eum accusantium aliquid culpa, ea ipsa laboriosam laudantium! Eveniet exercitationem, mollitia ipsum dolorem culpa fugit maiores nisi. Doloribus in iusto ullam amet quae consectetur? Error consectetur, harum voluptatum illum illo ipsa totam perspiciatis quia aliquid amet nulla dolorum! Minima nemo accusamus, enim, aliquid placeat doloremque quidem accusantium, voluptatibus facere quod dolores aut nesciunt iste esse cumque exercitationem doloribus qui odio"
        img1={img3}
        img2={img4}/>
        
    </div>
  )
}
 
export default Destination
