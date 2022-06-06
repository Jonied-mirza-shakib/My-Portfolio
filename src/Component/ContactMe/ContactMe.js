import React from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactMe = () => {
    return (
        <div style={{ marginTop: '50px' }}>
            <h2 className='text-center' style={{ color: 'orange', textTransform: 'uppercase' }}>Contact Me</h2>
            <div className='mb-5' style={{ border: '2px solid darkcyan', maxWidth: '320px', margin: 'auto' }}></div>
            <div className='mt-5 mb-5 card' style={{ width: '70%', padding: '20px', margin: 'auto', backgroundColor: 'darkblue' }}>
                <div className="card-body">
                    <Form action='mailto:info@example.com?&subject=&cc=&bcc=&body=mohammadshakib210@gmail.com%0Amy%20email' method='post'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='text-white' style={{ fontWeight: 'bold' }}>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='text-white' style={{ fontWeight: 'bold' }}>Message</Form.Label>
                            <Form.Control as="textarea" rows="3" name="message" placeholder="Enter your Message" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;