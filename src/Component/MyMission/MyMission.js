import React from 'react';
import './MyMission.css'

const MyMission = () => {
    return (
        <div className='mb-5'>
            <h2 className='mt-5 heading'>My Mission in <span style={{ color: 'orange' }}>2022</span> </h2>
            <div className='mb-5' style={{ border: '2px solid darkcyan', maxWidth: '400px', margin: 'auto' }}></div>
            <div>
                <div className="row">
                    <div className="col-md-12 col-lg-4">
                        <div style={{ width: '100%', height: '300px', backgroundColor: 'darkcyan' }} className="card shadow-lg rounded">
                            <div className="card-body">
                                <h3 className='text-center mt-3 text-white' style={{ textTransform: 'uppercase' }}>Mission</h3>
                                <div className='mb-3' style={{ border: '2px solid white', maxWidth: '200px', margin: 'auto' }}></div>
                                <p className='fs-5 text-center text-white'>I am preparing myself for the new mission of the new year. My mission is to build myself as a full-fledged web developer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <div style={{ width: '100%', height: '300px', backgroundColor: 'darkcyan', overflow: 'scroll' }} className="card shadow-lg rounded">
                            <div className="card-body">
                                <h3 className='text-center mt-3 text-white' style={{ textTransform: 'uppercase' }}>About Me</h3>
                                <div className='mb-3' style={{ border: '2px solid white', maxWidth: '200px', margin: 'auto' }}></div>
                                <p className='fs-5 text-center text-white'>
                                    Hello, I'm Jonied Mirza Shakib. A passionate Programmer who likes to explore new technologies and try something new with the time being. As MERN stack gives a facility to create a flexible and scalable web app, I found it much more interesting to start my programming career.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <div style={{ width: '100%', height: '300px', backgroundColor: 'darkcyan' }} className="card shadow-lg rounded">
                            <div className="card-body">
                                <h3 className='text-center mt-3 text-white' style={{ textTransform: 'uppercase' }}>Goals</h3>
                                <div className='mb-3' style={{ border: '2px solid white', maxWidth: '200px', margin: 'auto' }}></div>
                                <p className='fs-5 text-center text-white'>My goal is to become a full-fledged web developer, to get a job or an internship in a good company. And to achieve something good in my career.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyMission;