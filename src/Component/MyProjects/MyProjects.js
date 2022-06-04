import React from 'react';

const MyProjects = () => {
    return (
        <div style={{ marginTop: '50px', marginBottom: '50px' }}>
            <h2 style={{ color: 'darkblue', textTransform: 'uppercase', fontWeight: 'bold', fontSize: '35px' }} className='text-center'>My Latest <span style={{ color: 'orange' }}>projects</span> </h2>
            <div className='mb-5' style={{ border: '2px solid darkcyan', maxWidth: '400px', margin: 'auto' }}></div>
        </div>
    );
};

export default MyProjects;