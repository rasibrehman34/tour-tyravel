import React from 'react'
import './Trip.css'

const TripData = (props) => {
  return (
    <div className='t-card'>
        <div className='t-image'>
            <img src={props.image} alt="cardImage" />
        </div>
        <h2>{props.heading}</h2>
        <p>{props.paragraph}</p>
      
    </div>
  )
}

export default TripData
