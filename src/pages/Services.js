import React from 'react'

const Services = () => {
  return (
    <>
      <section id='services' className='services-container'>
        <div className='service-contant'>
          <h1>We offer high demand services </h1>
          <div className='services-items'>
            <div className='services-item'>
              <i className='material-icons'>edit</i>
              <h1>UI/UX Design</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
                metus ac nulla consequat aliquet id quis turpis.
              </p>
              <button>Get started</button>
            </div>
            <div className='services-item'>
              <i className='material-icons'>code</i>
              <h1>Front End</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
                metus ac nulla consequat aliquet id quis turpis.
              </p>
              <button>Get started</button>
            </div>
            <div className='services-item'>
              <i className='material-icons'>list</i>
              <h1>Back End</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
                metus ac nulla consequat aliquet id quis turpis.
              </p>
              <button>Get started</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
