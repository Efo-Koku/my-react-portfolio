import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'


const Footer = () => {
  return (
   <footer>
    <a href="#ooter" className='footer__logo'>EFO</a>

    <ul className='permalinks'>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>

    </ul>

    <div className="footer__socials">
      <a href="https://facebook.com"><FaFacebookF/></a>
      <a href="https://instagram.com"><BsInstagram/></a>
      <a href="https://twitter.com"><FiTwitter/></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; EFO. All rights reserved</small>
    </div>
    
   </footer>
  )
}

export default Footer