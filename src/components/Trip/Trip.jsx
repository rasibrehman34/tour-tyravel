import React from 'react'
import './Trip.css'
import TripData from './TripData'
import img4 from '../../assets/tourtravelImgs/img4.jpg'
const Trip = () => {
  return (
    <div className='trip'>
        <h1>Recent trip</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora.</p>
        <div className="tripcard">

        <TripData
        image={img4}
        heading="Trip in Indonesia"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellat ad sapiente voluptate error fuga praesentium nihil aliquid quisquam mollitia qui ipsa delectus, molestias repudiandae cupiditate. Aspernatur animi officiis natus?"
         />

        <TripData
        image={img4}
        heading="Trip in Malaysia"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellat ad sapiente voluptate error fuga praesentium nihil aliquid quisquam mollitia qui ipsa delectus, molestias repudiandae cupiditate. Aspernatur animi officiis natus?"
         />

        <TripData
        image={img4}
        heading="Trip in Thailand"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellat ad sapiente voluptate error fuga praesentium nihil aliquid quisquam mollitia qui ipsa delectus, molestias repudiandae cupiditate. Aspernatur animi officiis natus?"
         />
        </div>


      
    </div>
  )
}

export default Trip
