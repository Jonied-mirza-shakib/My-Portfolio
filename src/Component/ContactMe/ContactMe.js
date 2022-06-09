import React from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactMe = () => {
    return (
        <div style={{ marginTop: '50px' }}>
            <h2 className='text-center' style={{ color: 'orange', textTransform: 'uppercase' }}>Contact Me</h2>
            <div className='mb-5' style={{ border: '2px solid darkcyan', maxWidth: '320px', margin: 'auto' }}></div>
            <div style={{ backgroundColor: 'gray' }} className="pt-3">
                <Form style={{ width: '50%', margin: 'auto' }} action='https://formspree.io/f/mvolpkpz' method='post'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='text-white' style={{ fontWeight: 'bold' }}>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='text-white' style={{ fontWeight: 'bold' }}>Message</Form.Label>
                        <Form.Control as="textarea" rows="3" name="message" placeholder="Enter your Message" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className='w-100 fs-5'>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default ContactMe;