import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me4.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <section id="home">
    <header>
      <div className="container header_container">
      <h5>Hello, I am</h5>
      <h1>Efo-Koku Avornyo</h1>
      <h5 className="text-light">Front-end Developer</h5>
      <CTA/>
      <HeaderSocial/>

      <div className="me">
        <img src={ME} alt="me" />
      </div>

      <a href="#contact" className='scroll_down'>Scroll Down</a>


      </div>
    </header>
    </section>
  )
}

export default Header