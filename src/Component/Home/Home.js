import React from 'react';
import './Home.css'
import img from '../../img/shakib-two.png'

const Home = () => {
    return (
        <div className='home-first-section'>
            <div>
                <div className='first-section'>
                    <h1 style={{ color: 'dimgray' }}><span>Web Developer</span>
                        <br />
                        <span>Mission 2022</span></h1>
                </div>
                <h2 style={{ color: 'dimgray' }}>HELLO!</h2>
                <h2 style={{ color: 'dimgray' }}>I AM JONIEAD MIRZA SHAKIB</h2>
                <p style={{ fontWeight: 'bold', color: 'darkblue' }}>I Am Junior Full Stack Web Devloper</p>
                <a className='btn btn-primary' href="https://drive.google.com/uc?export=download&id=1wOjAclaF3PFgaR_kJXeUY1p_pZIn0XUo" target='_blank'>Download My Resume</a>
            </div>
            <div>
                <img style={{ width: '70%' }} src={img} alt="" />
            </div>
        </div>
    );
};

export default Home;