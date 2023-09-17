import React from 'react';
import './intro.css';
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import {Link} from 'react-scroll';

const Intro = () => {
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
    return (
        <section id="intro">
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'> I'm <span className='introName'>Sarah Paterson</span><span className='introTitle'><br/>Graphic & Web Designer</span></span>
                <Link><button onClick={onButtonClick} className='btn'><img src={btnImg} alt='Hire Me' className='btnImg'/>Download My Resume</button></Link>
            </div>
            <img src={bg} alt='Profile' className='bg' />
        </section>
    )
}

export default Intro