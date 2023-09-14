import React from 'react';
import './about.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png'

const About = () => {
    return ( 
        <section id='about'>
            <span className='aboutTitle'>About Me</span>
            <span className='aboutDesc'>
                Hello! I’m Sarah Paterson, an artist, graphic designer, and aspiring computer programer.
                Though that may seem contrary, I am fundamentally a problem solver. Whether it is solving a problem in the composition of a painting, the communication through a logo design, or the code of a program, I find joy in solving problems.
            </span>
            <div className='aboutBars'>
                <div className='aboutBar'>
                    <img src={UIDesign} alt='UI Design' className='aboutBarImg'/>
                    <div className='aboutBarText'>
                        <h2>UI/UX Design</h2>
                        <p>This is a demo text, you can write your own content here</p>
                    </div>
                </div>
                <div className='aboutBar'>
                    <img src={WebDesign} alt='Web Design' className='aboutBarImg'/>
                    <div className='aboutBarText'>
                        <h2>Website Design</h2>
                        <p>This is a demo text, you can write your own content here</p>
                    </div>
                </div>
                <div className='aboutBar'>
                    <img src={AppDesign} alt='App Design' className='aboutBarImg'/>
                    <div className='aboutBarText'>
                        <h2>App Design</h2>
                        <p>This is a demo text, you can write your own content here</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About