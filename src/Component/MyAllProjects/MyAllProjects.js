import React from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';
import doctorsPortal from '../../img/doctor.png'
import motorPart from '../../img/motor.png'
import gymTrainer from '../../img/gym.png'

const MyAllProjects = () => {
    return (
        <div className='mb-5'>
            <div style={{ marginTop: '50px', marginBottom: '50px' }}>
                <h2 style={{ color: 'darkblue', textTransform: 'uppercase', fontWeight: 'bold', fontSize: '35px' }} className='text-center'>My Latest All <span style={{ color: 'orange' }}>projects</span> </h2>
            </div>
            <div>
                <div className="row">
                    <div className="col-md-12 col-lg-6">
                        <div className="card shadow-lg" style={{ backgroundColor: 'darkcyan', width: '100%', height: '800px' }}>
                            <div className="card-body">
                                <img className='w-100 mb-3' src={doctorsPortal} alt="" />
                                <h2 style={{ color: 'white', fontSize: '25px', fontWeight: 'bold', textTransform: 'uppercase', color: 'darkblue', fontFamily: 'sans-serif' }}>Project Name: <span style={{ fontSize: '30px', color: 'orange', textTransform: 'capitalize', fontFamily: 'sans-serif' }}>Doctors Portal</span></h2>
                                <h4 style={{ color: 'white', fontSize: '25px', fontWeight: 'bold', textTransform: 'uppercase', color: 'darkblue', fontFamily: 'sans-serif' }}>Project Type: <span style={{ fontSize: '20px', color: 'orange', textTransform: 'capitalize' }}>A full-stack MERN project</span></h4>
                                <p style={{ fontFamily: 'sans-serif' }}>
                                    <span style={{ color: 'white', fontSize: '25px', fontWeight: 'bold', textTransform: 'uppercase', color: 'darkblue', fontFamily: 'sans-serif' }}>Project Description:</span> <br />
                                    <span style={{ fontSize: '20px', color: 'white', textTransform: 'capitalize' }}> <FiArrowRightCircle style={{ color: 'orange', fontSize: '25px' }} /> Implemented login system using firebase. Private Routes are ensured.</span>
                                    <br />
                                    <span style={{ fontSize: '20px', color: 'white', textTransform: 'capitalize' }}> <FiArrowRightCircle style={{ color: 'orange', fontSize: '25px' }} /> Developed admin panel for users and admin where admin can do CRUD operations. Users can give reviews and they can book a service after confirming payment (Stripe is integrated here).</span>
                                    <br />
                                    <span style={{ fontSize: '20px', color: 'white', textTransform: 'capitalize' }}> <FiArrowRightCircle style={{ color: 'orange', fontSize: '25px' }} /> If a user wants, he can take the serial number of the doctor and make the payment.</span>
                                </p>
                                <p><span style={{ color: 'white', fontSize: '25px', fontWeight: 'bold', textTransform: 'uppercase', color: 'darkblue', fontFamily: 'sans-serif' }}>Technology used:</span> <span style={{ color: 'white' }}>React js, Router, Firebase Authentication, tailwind CSS, DaisyUi, Node js, MongoDB, Express, Heroku, Netlify, Stripe.</span> </p>
                                <div>
                                    <a className='btn btn-primary' style={{ marginRight: '10px' }} href="https://doctors-portal-c4592.web.app/" target='_blank'>Live Site Link</a>
                                    <a className='btn btn-primary' style={{ marginRight: '10px' }} href="https://github.com/Jonied-mirza-shakib/doctors-portal-client" target='_blank'>Client Side Code</a>
                                    <a className='btn btn-primary' href="https://github.com/Jonied-mirza-shakib/doctors-portal-server" target='_blank'>Server Side Code</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <div className="card shadow-lg" style={{ backgroundColor: 'darkcyan', width: '100%', height: '800px' }}>
                            <div className="card-body">
                                <img className='w-100 mb-3' src={motorPart} alt="" />
                                <h2 style={{ color: 'white', fontSize: '25px', fontWeight: 'bold', textTransform: 'uppercase', color: 'darkblue', fontFamily: 'sans-serif' }}>Project Name: <span style={{ fontSize: '30px', color: 'orange', textTransform: 'capitalize', fontFamily: 'sans-serif' }}>Motor Parts</span></h2>
                                <h4 style={{ color: 'white', fontSize: '25px', fontWeight: 'bold', textTransform: 'uppercase', color: 'darkblue', fontFamily: 'sans-serif' }}>Project Type: <span style={{ fontSize: '20px', color: 'orange', textTransform: 'capitalize' }}>A full-stack MERN project</span></h4>
                                <p style={{ fontFamily: 'sans-serif' }}>
                                    <span style={{ color: 'white', fontSize: '25px', fontWeight: 'bold', textTransform: 'uppercase', color: 'darkblue', fontFamily: 'sans-serif' }}>Project Description:</span> <br />
                                    <span style={{ fontSize: '20px', color: 'white', textTransform: 'capitalize' }}> <FiArrowRightCircle style={{ color: 'orange', fontSize: '25px' }} />Implemented Login System Using Firebase. Private Routes Are Ensured.</span>
                                    <br />
                                    <span style={{ fontSize: '20px', color: 'white', textTransform: 'capitalize' }}> <FiArrowRightCircle style={{ color: 'orange', fontSize: '25px' }} /> If a user wants, he can order any product, update his profile information, view his profile information, add reviews. And see his order list.</span>
                                </p>
                                <p><span style={{ color: 'white', fontSize: '25px', fontWeight: 'bold', textTransform: 'uppercase', color: 'darkblue', fontFamily: 'sans-serif' }}>Technology used:</span> <span style={{ color: 'white' }}>React js, Router, Firebase Authentication, Tailwind css, DaisyUi, Node js, MongoDB, Express, Heroku, Netlify</span>
                                </p>
                                <div>
                                    <a className='btn btn-primary' style={{ marginRight: '10px' }} href="https://motor-parts-website.web.app/" target='_blank'>Live Site Link</a>
                                    <a className='btn btn-primary' style={{ marginRight: '10px' }} href="https://github.com/Jonied-mirza-shakib/motor-parts-client-side-code" target='_blank'>Client Side Code</a>
                                    <a className='btn btn-primary' href="https://github.com/Jonied-mirza-shakib/motor-parts-server-side-code" target='_blank'>Server Side Code</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12 col-lg-6">
                        <div className="card shadow-lg" style={{ backgroundColor: 'darkcyan', width: '100%', height: '800px' }}>
                            <div className="card-body">
                                <img className='w-100 mb-3' src={gymTrainer} alt="" />
                                <h2 style={{ color: 'white', fontSize: '25px', fontWeight: 'bold', textTransform: 'uppercase', color: 'darkblue', fontFamily: 'sans-serif' }}>Project Name: <span style={{ fontSize: '30px', color: 'orange', textTransform: 'capitalize', fontFamily: 'sans-serif' }}>Gym Trainer</span></h2>
                                <h4 style={{ color: 'white', fontSize: '25px', fontWeight: 'bold', textTransform: 'uppercase', color: 'darkblue', fontFamily: 'sans-serif' }}>Project Type: <span style={{ fontSize: '20px', color: 'orange', textTransform: 'capitalize' }}>FondEnd project</span></h4>
                                <p style={{ fontFamily: 'sans-serif' }}>
                                    <span style={{ color: 'white', fontSize: '25px', fontWeight: 'bold', textTransform: 'uppercase', color: 'darkblue', fontFamily: 'sans-serif' }}>Project Description:</span> <br />
                                    <span style={{ fontSize: '20px', color: 'white', textTransform: 'capitalize' }}> <FiArrowRightCircle style={{ color: 'orange', fontSize: '25px' }} />Implemented Login System Using Firebase. Private Routes Are Ensured.</span>
                                    <br />
                                    <span style={{ fontSize: '20px', color: 'white', textTransform: 'capitalize' }}> <FiArrowRightCircle style={{ color: 'orange', fontSize: '25px' }} /> When he clicks the checkout button, he will be taken to the checkout page, and he will have to give his information.</span>
                                </p>
                                <p><span style={{ color: 'white', fontSize: '25px', fontWeight: 'bold', textTransform: 'uppercase', color: 'darkblue', fontFamily: 'sans-serif' }}>Technology used:</span> <span style={{ color: 'white' }}>React js, Router, Firebase Authentication, Bootstrap.</span>
                                </p>
                                <div>
                                    <a className='btn btn-primary' style={{ marginRight: '10px' }} href="https://gym-trainer-909cb.web.app/" target='_blank'>Live Site Link</a>
                                    <a className='btn btn-primary' style={{ marginRight: '10px' }} href="https://github.com/Jonied-mirza-shakib/gym-trainer-interactive-website" target='_blank'>Client Side Code</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAllProjects;