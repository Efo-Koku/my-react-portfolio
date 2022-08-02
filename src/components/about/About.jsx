import React from 'react'
import './about.css'
import ME from '../../assets/me3.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiFillFolderOpen} from 'react-icons/ai'


const About = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>
   
    <div className="container about_container">
      <div className="about_me">
        <div className="about_me-image">
          <img src={ME} alt="me" />
        </div>
      </div>

      <div className="about_content">
        <div className="about_cards">
          <article className='about_card'>
            <FaAward className='about_icon'/> 
            <h5>Experience</h5>
            <small>3+ years  working</small>
          </article>

          <article className='about_card'>
            <FiUsers className='about_icon'/> 
            <h5>Clients</h5>
            <small> 200+ clients worldwide </small>
          </article>

          <article className='about_card'>
            <AiFillFolderOpen className='about_icon'/> 
            <h5>Projects</h5>
            <small>20+ projects completed </small>
          </article>
          </div>

          <p>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus id accusantium illum amet molestias dignissimos nam consequuntur modi odit, rerum explicabo porro voluptate? Incidunt temporibus quia corporis error fuga reprehenderit.
          </p>

          <a href="#contact" className='btn btn-primary'>Get in touch</a>
        </div>
    </div>
    </section>
  )
}

export default About;
