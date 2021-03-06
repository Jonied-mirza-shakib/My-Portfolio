import React from 'react';
import './MyHobbies.css'
import hobbiesImg from '../../img/boss.png'
const MyHobbies = () => {
    return (
        <div className='container' style={{ paddingTop: '80px' }}>
            <h2 style={{ color: 'white' }} className='hobbies-heading'>My Hobbies and <span style={{ color: 'orange' }}>Language</span> </h2>
            <div className='mb-5' style={{ border: '2px solid white', maxWidth: '450px', margin: 'auto' }}></div>
            <div className="row my-3">
                <div className="col-md-12 col-lg-6 mb-sm-3 mb-md-3">
                    <div className="card shadow-lg bg-body rounded">
                        <div className="card-body" style={{ backgroundColor: 'darkcyan' }}>
                            <img className='text-center' style={{ width: '50%' }} src={hobbiesImg} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-6">
                    <div style={{ width: '100%', height: '290px', display: 'flex', alignItems: 'center' }} className="card shadow-lg bg-body rounded">
                        <div className="card-body" style={{ backgroundColor: 'darkcyan' }}>
                            <h5 style={{ fontSize: '20px', color: 'aliceblue', marginTop: '30px' }}>Hello, I'm Jonied Mirza Shakib.My hobbies are blogging, traveling, swimming, and my hobbies are working on new projects. And I can speak Bengali and English very well.</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyHobbies;