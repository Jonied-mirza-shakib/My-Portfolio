import React from 'react';
import './Home.css'
import img from '../../img/shakib-two.png'
import { ImMan } from 'react-icons/im';
import MyMission from '../MyMission/MyMission';
import MyHobbies from '../MyHobbies/MyHobbies';
import MySkill from '../MySkill/MySkill';
import MyProjects from '../MyProjects/MyProjects';
import ContactMe from '../ContactMe/ContactMe';

const Home = () => {
    return (
        <div>
            <div className='home-first-section'>
                <div className='row'>
                    <div className="col-md-12 col-lg-6">
                        <div className='first-section'>
                            <h1 style={{ color: 'dimgray', marginBottom: '10px' }}><span>Web Developer</span>
                                <br />
                                <span>Mission 2022</span></h1>
                        </div>
                        <h2 style={{ color: 'dimgray', marginBottom: '10px' }}>HELLO!</h2>
                        <h2 style={{ color: 'dimgray', marginBottom: '10px' }}>I AM JONIEAD MIRZA SHAKIB</h2>
                        <p style={{ fontWeight: 'bold', color: 'darkblue', marginBottom: '20px' }}>I Am Junior MERN-Stack Web Devloper</p>
                        <a style={{ fontSize: '15px', fontWeight: 'bold' }} className='btn btn-primary rounded' href="https://drive.google.com/uc?export=download&id=1M8w_FEcv0alCqhUVRHspZwRNPMY0aShn" target='_blank'> <span style={{ fontSize: '25px' }}><ImMan /></span> Download My Resume</a>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <img style={{ width: '50%' }} src={img} alt="" />
                    </div>
                </div>
            </div>
            <MyMission></MyMission>
            <MyHobbies></MyHobbies>
            <MySkill></MySkill>
            <MyProjects></MyProjects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;