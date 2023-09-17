import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';

const Works = () => {
    return (
        <section id ='works'>
            <h2 className='worksTitle'>My Portfolio</h2>
            <div className='worksImgs'>
                <a className='worksImgContainer' href="https://stormy-plains-32549-a1bc163e95b5.herokuapp.com/" target="_blank">
                    <img className='worksImg' src={Portfolio1} alt='Ghostwriter'/>
                </a>
                <a className='worksImgContainer' href="https://ronbuttermore.github.io/brewery-finder/" target="_blank">
                    <img className='worksImg' src={Portfolio2} alt='Brewrey Finder'/>
                </a>
                <a className='worksImgContainer' href="https://sarah-paterson.github.io/Weather-Dashboard/" target="_blank">
                    <img className='worksImg' src={Portfolio3} alt='Weatherr Dashboard'/>
                </a>
                <a className='worksImgContainer' href="https://sarah-paterson.github.io/Password-Generator-JavaScript/" target="_blank">
                    <img className='worksImg' src={Portfolio4} alt='Password Generator'/>
                </a>
                <a className='worksImgContainer' href="https://quiet-escarpment-54550-d9ecd6b39784.herokuapp.com/" target="_blank">
                    <img className='worksImg' src={Portfolio5} alt='Note Taker'/>
                </a>
                <a className='worksImgContainer' href="https://sarah-paterson.github.io/Horiseon-Refactor/" target="_blank">
                    <img className='worksImg' src={Portfolio6} alt='Horseon Refactor'/>
                </a>
            </div>
            <a href="https://github.com/Sarah-Paterson?tab=repositories" target="_blank">
                <button className='worksBtn'>More on GitHub</button>
            </a>
        </section>
    )
}

export default Works