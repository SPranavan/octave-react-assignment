import React from 'react';
import '../Styles/Contact.css';
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState(''); 

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    function handleInputChange(event) {
        const { id, value } = event.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_95tqtwh', 'template_t8ywebw', e.target, '_30AocFosrENHB134')
          .then((result) => {
                localStorage.setItem('alertMessage', 'Message sent successfully');
                window.location.reload();
          }, (error) => {
              console.log(error.text);
          });
      };

    useEffect(() => {
        const storedAlertMessage = localStorage.getItem('alertMessage');
        if (storedAlertMessage) {
            handleShowAlert(storedAlertMessage);
        }
    }, []);


    const handleShowAlert = (message) => {
        setAlertMessage(message);
        setShowAlert(true);
    
        setTimeout(() => {
          setShowAlert(false);
        }, 3000); 
    };


    return (
        <div className='Contact-container'>
            <h2 style={{color:"#33313B"}}>Contact Us</h2>

            <form ref={form} onSubmit={sendEmail} className='mt-4'>
                <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="name" 
                    name='from_name'
                    onChange={handleInputChange}
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
                    id="emailId" 
                    name="email_id"
                    onChange={handleInputChange}
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
                    name="message"
                    rows="4"
                    onChange={handleInputChange}
                    required
                ></textarea>
                </div>
                <button type="submit" className="btn app-btn-2">
                Submit
                </button>
            </form>

            <Alert
                show={showAlert}
                    variant="info"
                    onClose={() => setShowAlert(false)}
                    dismissible
                    style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    zIndex: 9999, // Adjust the z-index as needed
                    }}
                >
                {alertMessage}
            </Alert>  
        </div>
    )
}

export default ContactUs;