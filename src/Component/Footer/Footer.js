import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <div style={{ marginTop: '70px', backgroundColor: 'black', padding: '50px' }}>
            <div className='row'>
                <div className="col-12">
                    <p className='text-center' style={{ fontWeight: 'bold', fontSize: '18px', color: 'gainsboro', textTransform: 'capitalize', fontFamily: 'monospace' }}>&copy; copy right form Junied mirza shakib</p>
                </div>
            </div>
            <div className="row mt-3" style={{ margin: 'auto', textAlign: 'center' }}>
                <div className="col-sm-6 col-md-3 col-lg-3">
                    <a href="https://www.facebook.com/profile.php?id=100050105945881" style={{ color: 'white', fontSize: '25px' }} target='_blank'><FaFacebookSquare /></a>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-3">
                    <a href="https://www.instagram.com/mdsakib5280/" style={{ color: 'white', fontSize: '25px' }} target='_blank'><GrInstagram /></a>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-3">
                    <a href="https://github.com/Jonied-mirza-shakib" style={{ color: 'white', fontSize: '25px' }} target='_blank'><AiFillGithub /></a>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-3">
                    <a href="https://www.linkedin.com/in/jonied-mirza-shakib-bb455922a/" style={{ color: 'white', fontSize: '25px' }} target='_blank'><AiFillLinkedin /></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;