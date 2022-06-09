import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactMe.css'

const ContactMe = () => {
    const [state, handleSubmit] = useForm("mvolpkpz");
    if (state.succeeded) {
        alert('your message send is success')
    }
    return (
        <div>
            <div style={{ marginTop: '50px' }} className='container'>
                <h2 className='text-center' style={{ color: 'white', textTransform: 'uppercase' }}>Contact Me</h2>
                <div className='mb-5' style={{ border: '2px solid white', maxWidth: '320px', margin: 'auto' }}></div>
                <div style={{ backgroundColor: 'gray' }} className="pt-3">
                    <form onSubmit={handleSubmit} className='form w-75 m-auto'>
                        <label htmlFor="email">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <label htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                        <button type="submit" className='btn btn-primary w-100'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;