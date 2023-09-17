import React, { useRef } from 'react';
import { Link } from 'react-scroll';
import './contact.css';


import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';

import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';

import btnImg from '../../assets/hireme.png'

import emailjs from '@emailjs/browser';

const Contact = () => {
    // onButtonClick from geeksforgeeks.org
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Sarah-Paterson-Resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Sarah-Paterson-Resume.pdf';
                alink.click();
            })
        })
    }
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_75xvbni', 'template_v1gtqsm', form.current, 'oeLM5S79sQCBlPqQ7')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email sent!')
          }, (error) => {
              console.log(error.text);
          });
    };
    return (
        <section id='contactPage'>
            <div id='clients'>
                <h1 className='contactPageTitle'>My Resume</h1>
                <Link><button onClick={onButtonClick} className='btn'><img src={btnImg} alt='Hire Me' className='btnImg'/>Download My Resume</button></Link>
            </div>
            <div id='contact'>
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail} >
                    <input type='text' className='name' placeholder='Your Name' name="from_name" />
                    <input type='email' className='email' placeholder='Your Email' name="from_email" />
                    <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
                    <button type='submit' value='Send' className='submitBtn' >Submit</button>
                    <div className='links'>
                        <a href="https://github.com/Sarah-Paterson" target="_blank">
                            <img src={FacebookIcon} alt='github' className='link'/>
                        </a>
                        <a href="https://www.linkedin.com/in/sarahlpaterson/" target="_blank">
                            <img src={TwitterIcon} alt='linkedin' className='link'/>
                        </a>
                        <a href="https://www.behance.net/sarahlridings" target="_blank">
                            <img src={YoutubeIcon} alt='behance' className='link'/>
                        </a>
                        <a onClick={onButtonClick} className='resume-icon'>
                            <img src={InstagramIcon} alt='resume' className='link'/>
                        </a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact