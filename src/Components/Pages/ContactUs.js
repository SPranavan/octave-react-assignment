import React from 'react';
import '../Styles/Contact.css';

const ContactUs = () => {
    return (
        <div className='Contact-container'>
            <h2 style={{color:"#33313B"}}>Contact Form</h2>
            <form onSubmit="" className='mt-4'>
                <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    onChange=""
                    required
                />
                </div>
                <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    onChange=""
                    required
                />
                </div>
                <div className="mb-3">
                <label htmlFor="message" className="form-label">
                    Message
                </label>
                <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    onChange=""
                    required
                ></textarea>
                </div>
                <button type="submit" className="btn app-btn-2">
                Submit
                </button>
            </form>
        </div>
    )
}

export default ContactUs;