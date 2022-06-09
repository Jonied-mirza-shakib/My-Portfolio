import React from 'react';
import img from '../../img/shakib-two.png'
import { ImMan } from 'react-icons/im';

const SingleHome = () => {
    return (
        <div style={{ backgroundColor: 'black' }}>
            <div className='container pt-5 pb-3'>
                <div className='row' style={{ marginTop: '50px' }}>
                    <div className="col-md-12 col-lg-6 mt-5 pt-2">
                        <h1 style={{ color: 'white', marginBottom: '10px' }}>HI!</h1>
                        <h1 style={{ color: 'white', marginBottom: '10px' }}>I AM JONIEAD MIRZA SHAKIB</h1>
                        <p style={{ fontWeight: 'bold', color: 'white', marginBottom: '20px', textTransform: 'uppercase' }}>I Am Junior MERN-Stack Web Developer</p>
                        <a style={{ fontSize: '15px', fontWeight: 'bold', textTransform: 'uppercase' }} className='btn btn-outline-success text-light rounded' href="https://drive.google.com/uc?export=download&id=1M8w_FEcv0alCqhUVRHspZwRNPMY0aShn" target='_blank'> <span style={{ fontSize: '25px' }}><ImMan /></span> Download My Resume</a>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <img style={{ width: '100%' }} src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleHome;