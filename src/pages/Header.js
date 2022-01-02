import React from 'react'

const Header = () => {
  return (
    <>
      <header>
        <h1>
          <a href='/'>Edie</a>
        </h1>
        <button>
          <span className='material-icons'>menu</span>
        </button>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='#services'>Services</a>
          </li>
          <li>
            <a href='#ourWorks'>Our Works</a>
          </li>
          <li>
            <a href='#clients'>Clients</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </header>
    </>
  )
}

export default Header
