import React from 'react'

const Contact = () => {
  return (
    <>
      <div id='contact' className='contact-contaniner'>
        <div className='contact-contant'>
          <ul className='links'>
            <li>Home</li>
            <li>Services</li>
            <li>Our Works</li>
            <li>Clients</li>
            <li>Contact</li>
          </ul>
          <div className='social-icons'>
            <h1>Edie</h1>
            <p>
              <span className='fa fa-instagram' />
              <span className='fa fa-linkedin' />
              <span className='fa fa-twitter' />
            </p>
          </div>
          <div className='contact-field'>
            <label htmlFor='email'>Want us to contact you?</label>
            <div className='email-control'>
              <input type='email' name='email' id='email' placeholder='Email' />
              <button className='btn'>Join</button>
            </div>
          </div>
        </div>
        <footer>
          created by <a href='https://github.com/jyotip101'>jyoti_p</a> -
          devChallenges.io
        </footer>
      </div>
    </>
  )
}

export default Contact
