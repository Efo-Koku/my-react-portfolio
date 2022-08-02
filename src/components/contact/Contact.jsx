import React from 'react'
import './contact.css'
import{MdEmail} from 'react-icons/md'
import{AiFillLinkedin} from 'react-icons/ai'
import{IoLogoWhatsapp} from 'react-icons/io'
// import {useRef} from 'react';
// import emailjs from '@emailjs/browser'





const Contact = () => {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('<YOUR SERVICE ID>','<YOUR TEMPLATE ID>', '#myForm')
	// .then(function(response) {
	//    console.log('SUCCESS!', response.status, response.text);
	// }, function(err) {
	//    console.log('FAILED...', err);
	// });

    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
  // };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="div contact_options">
          <article className="contact_option">
            <MdEmail className="contact_option-icon"/>
            <h4>Email</h4>
            <h5>efokwaku@yahoo.co.uk</h5>
            <a href="mailto:efokwaku@yahoo.co.uk" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>

          <article className="contact_option">
            <AiFillLinkedin className="contact_option-icon"/>
            <h4>LinkedIn</h4>
            <h5>Efo-Koku Avornyo</h5>
            <a href="https://www.linkedin.com/in/efo-kokuavornyo/" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>

          <article className="contact_option">
            <IoLogoWhatsapp className="contact_option-icon"/>
            <h4>WhatsApp</h4>
            <h5>079 6237 3724</h5>
            <a href="https://api.whatsapp.com/send?phone=07962373724" target="_blank" rel="noopener noreferrer">Call/Message</a>
          </article>

        </div>
        {/* END OF CONTACT OPTIONS **/}

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type = "submit" class="btn btn-primary">Send Message</button>
        </form>

      </div>
    </section>

  )
}

export default Contact