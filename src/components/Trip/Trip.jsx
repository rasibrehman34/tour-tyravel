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
        heading="Trip in Indonesia"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellat ad sapiente voluptate error fuga praesentium nihil aliquid quisquam mollitia qui ipsa delectus, molestias repudiandae cupiditate. Aspernatur animi officiis natus?"
         />

        <TripData
        image={img2}
        heading="Trip in Malaysia"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellat ad sapiente voluptate error fuga praesentium nihil aliquid quisquam mollitia qui ipsa delectus, molestias repudiandae cupiditate. Aspernatur animi officiis natus?"
         />

        <TripData
        image={img3}
        heading="Trip in Thailand"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellat ad sapiente voluptate error fuga praesentium nihil aliquid quisquam mollitia qui ipsa delectus, molestias repudiandae cupiditate. Aspernatur animi officiis natus?"
         />
        </div>


      
    </div>
  )
}

export default Trip
