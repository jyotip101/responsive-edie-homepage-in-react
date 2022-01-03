import React, { useState } from 'react'

const Header = () => {
  const [menu, setMenu] = useState(false)

  return (
    <>
      <header>
        <h1>
          <a href='/'>Edie</a>
        </h1>
        <button onClick={() => setMenu(!menu)}>
          <span
            className={`${
              !menu ? 'material-icons icon-menu' : 'material-icons icon-close'
            }`}
          >
            {menu ? 'close' : 'menu'}
          </span>
        </button>
        <ul className='links'>
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
        {menu && (
          <div className='mobile-menu'>
            <ul className='menu-links'>
              <li onClick={() => setMenu(!menu)}>
                <a href='/'>Home</a>
              </li>
              <li onClick={() => setMenu(!menu)}>
                <a href='#services'>Services</a>
              </li>
              <li onClick={() => setMenu(!menu)}>
                <a href='#ourWorks'>Our Works</a>
              </li>
              <li onClick={() => setMenu(!menu)}>
                <a href='#clients'>Clients</a>
              </li>
              <li onClick={() => setMenu(!menu)}>
                <a href='#contact'>Contact</a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  )
}

export default Header
