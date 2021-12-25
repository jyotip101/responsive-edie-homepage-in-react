import React from 'react'
// images
import booking from '../images/booking.png'
import juiceProduct from '../images/juice-product.png'
import onboard from '../images/onboard.png'
import smarthome from '../images/smarthome.jpg'

const OurWorks = () => {
  return (
    <>
      <section className='ourworks-container'>
        <div className='ourworks-contant'>
          <h1>Good design means good business</h1>
          <div className='ourworks-cards'>
            <div className='card'>
              <img src={smarthome} alt='smarthome' />
              <p>Full stack application</p>
              <h3>Smart home dashboard</h3>
            </div>
            <div className='card'>
              <img src={onboard} alt='onboard' />
              <p>UX/UI design</p>
              <h3>Onboard application</h3>
            </div>
            <div className='card'>
              <img src={booking} alt='booking' />
              <p>Mobile application</p>
              <h3>Booking system</h3>
            </div>
            <div className='card'>
              <img src={juiceProduct} alt='juice Product' />
              <p>Front End applicati on</p>
              <h3>Juice product homepage</h3>
            </div>
          </div>

          <div className='see-more'>
            <p>
              see more
              <span className='material-icons'>arrow_right_alt</span>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurWorks
