import React from 'react'
import '../ContactUs/ContactUs.css'

const ContactUs = () => {
  return (
    <div className='form-container'>
          <h1>Send amessage to us!</h1>      
          <form >
            <input type="text" placeholder='Name'/>
            <input type="text" placeholder='Email'/>
            <input type="text" placeholder='Subject'/>
            <textarea rows={4} placeholder='message'></textarea>
          <button>Send Message</button>
          </form>
    </div>
  )
}

export default ContactUs
