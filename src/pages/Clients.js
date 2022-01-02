import React from 'react'
// images
import person1 from '../images/person1.png'
import person2 from '../images/person2.png'
import person3 from '../images/person3.png'
import person4 from '../images/person4.png'

const Clients = () => {
  return (
    <>
      <section id='clients' className='clients-container'>
        <div className='clients-contant'>
          <div className='clients-items'>
            <div className='clients-items-item'>
              <div className='item'>
                <span>Meet the team</span>
                <h1>We are chilled and a laidback team</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className='clients-items-item'>
              <div className='item'>
                <img src={person3} alt='person3' />
              </div>
              <div className='item'>
                <img src={person1} alt='person1' />
                <img src={person2} alt='person2' />
              </div>
            </div>
          </div>
          <div className='clients-profile'>
            <p>
              “Fast and outstanding resutls. Edie understands their customer’s
              needs. They have a young and talented team.”
            </p>
            <div className='profile-card'>
              <img src={person4} alt='person4' />
              <div className='desc'>
                <h1>Carlos Tran</h1>
                <p>The Decorate Gatsby</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Clients
