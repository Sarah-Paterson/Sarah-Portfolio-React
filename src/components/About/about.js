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
                Hello! I’m Sarah Paterson, an artist, graphic designer, and computer programer.
                Fundamentally, I am a problem solver. Whether it is solving a problem in the composition of a painting, the communication through a logo design, or the code of a program, I find joy in solving problems creatively.
            </span>
            <div className='aboutBars'>
                <div className='aboutBar'>
                    <img src={UIDesign} alt='Fine Art' className='aboutBarImg'/>
                    <div className='aboutBarText'>
                        <h2>Fine Artist</h2>
                        <p>From a young age, I’ve been creating artwork. Because of this, I furthered my education by studying art. With a bachelor degree in fine art, I have the education as well as years of experience creating artwork though drawing, painting, and digital art.</p>
                    </div>
                </div>
                <div className='aboutBar'>
                    <img src={AppDesign} alt='Graphic Design' className='aboutBarImg'/>
                    <div className='aboutBarText'>
                        <h2>Graphic Designer</h2>
                        <p>Though my university major was fine art, I minored in Graphic Design, and I quickly started working as a graphic designer after graduating. Now, I have over six years of experience working as a graphic designer and art director.</p>
                    </div>
                </div>
                <div className='aboutBar'>
                    <img src={WebDesign} alt='Web Design' className='aboutBarImg'/>
                    <div className='aboutBarText'>
                        <h2>Website Designer</h2>
                        <p>Recently, I have had the opportunity to learn all about website design and even created this website myself. I knew that graphic design and website design went hand in hand, so I’ve completed a certificate course in full stack web development. I’m very excited to grow in this field and create more websites and applications.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About