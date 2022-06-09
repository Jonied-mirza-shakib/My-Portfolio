import React from 'react';
import './MySkill.css'
import { FiArrowRightCircle } from 'react-icons/fi';

const MySkill = () => {
    return (
        <div style={{ marginBottom: '50px' }}>
            <div className="row">
                <div className="col-12">
                    <h2 className='text-center' style={{ fontSize: '35px', marginTop: '50px', textTransform: 'uppercase', color: 'darkblue' }}>My Skill</h2>
                    <div className='mb-5' style={{ border: '2px solid darkcyan', maxWidth: '200px', margin: 'auto' }}></div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-sm-3 mb-md-3">
                        <div style={{ width: '100%', height: '280px', backgroundColor: 'darkcyan', color: 'white' }} className="card shadow-lg">
                            <div className="card-body">
                                <h2 style={{ fontSize: '30px', color: 'orange', fontWeight: 'bold', textTransform: 'uppercase' }}>Front End:</h2>
                                <p> <span style={{ color: 'orange', fontSize: '25px', marginRight: '10px' }}><FiArrowRightCircle /></span> Javascript</p>
                                <p> <span style={{ color: 'orange', fontSize: '25px', marginRight: '10px' }}><FiArrowRightCircle /></span> Es6</p>
                                <p> <span style={{ color: 'orange', fontSize: '25px', marginRight: '10px' }}><FiArrowRightCircle /></span> React</p>
                                <p> <span style={{ color: 'orange', fontSize: '25px', marginRight: '10px' }}><FiArrowRightCircle /></span> Bootstrap</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-sm-3 mb-md-3">
                        <div style={{ width: '100%', height: '280px', backgroundColor: 'darkcyan', color: 'white' }} className="card shadow-lg">
                            <div className="card-body">
                                <h2 style={{ fontSize: '30px', color: 'orange', fontWeight: 'bold', textTransform: 'uppercase' }}>Back End :</h2>
                                <p> <span style={{ color: 'orange', fontSize: '25px', marginRight: '10px' }}><FiArrowRightCircle /></span> Node</p>
                                <p> <span style={{ color: 'orange', fontSize: '25px', marginRight: '10px' }}><FiArrowRightCircle /></span> Express</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-sm-3 mb-md-3">
                        <div style={{ width: '100%', height: '280px', backgroundColor: 'darkcyan', color: 'white' }} className="card shadow-lg">
                            <div className="card-body">
                                <h2 style={{ fontSize: '30px', color: 'orange', fontWeight: 'bold', textTransform: 'uppercase' }}>Database :</h2>
                                <p><span style={{ color: 'orange', fontSize: '25px', marginRight: '10px' }}><FiArrowRightCircle /></span> MongoDB</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-sm-3 mb-md-3">
                        <div style={{ width: '100%', height: '280px', backgroundColor: 'darkcyan', color: 'white' }} className="card shadow-lg">
                            <div className="card-body">
                                <h2 style={{ fontSize: '30px', color: 'orange', fontWeight: 'bold', textTransform: 'uppercase' }}>Familiar-With :</h2>
                                <p><span style={{ color: 'orange', fontSize: '25px', marginRight: '10px' }}><FiArrowRightCircle /></span> Metarial UI</p>
                                <p><span style={{ color: 'orange', fontSize: '25px', marginRight: '10px' }}><FiArrowRightCircle /></span> Tailwind Css</p>
                                <p><span style={{ color: 'orange', fontSize: '25px', marginRight: '10px' }}><FiArrowRightCircle /></span> Google Map</p>
                                <p><span style={{ color: 'orange', fontSize: '25px', marginRight: '10px' }}><FiArrowRightCircle /></span> JWT Auth</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div style={{ width: '100%', height: '280px', backgroundColor: 'darkcyan', color: 'white' }} className="card shadow-lg">
                            <div className="card-body">
                                <h2 style={{ fontSize: '25px', color: 'orange', fontWeight: 'bold', textTransform: 'uppercase' }}>Other Technologies :</h2>
                                <p><span style={{ color: 'orange', fontSize: '25px', marginRight: '10px' }}><FiArrowRightCircle /></span> Firebase</p>
                                <p><span style={{ color: 'orange', fontSize: '25px', marginRight: '10px' }}><FiArrowRightCircle /></span> Heroku</p>
                                <p><span style={{ color: 'orange', fontSize: '25px', marginRight: '10px' }}><FiArrowRightCircle /></span> Netlify</p>
                                <p><span style={{ color: 'orange', fontSize: '25px', marginRight: '10px' }}><FiArrowRightCircle /></span> GitHub</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySkill;