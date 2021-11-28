import React from 'react'

const Home = () => {
  return (
    <>
      <main className='home-section'>
        <p className='title-1'>Unhappy with your website?</p>
        <h1>We create beautiful and fast web services</h1>
        <img src='../images/heroImage.jpg' alt='heroImage.jpg' />
        <h1 className='title-2'>Story, emotion and purpose</h1>
        <p>
          We help transform your ideas into real world applications that will
          outperform your toughest competition and help you achieve your
          strategic goals in short period of time.
        </p>
        <div className='input-control'>
          <label htmlFor='email'>Want us to contact you?</label>
          <div className='input-fields'>
            <input
              type='email'
              id='email'
              placeholder='Email'
              className='input-email'
            />
            <button className='btn'>Join</button>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
