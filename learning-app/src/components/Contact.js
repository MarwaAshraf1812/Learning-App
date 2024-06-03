import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="container mt-5 mb-5">
            <div className="row justify-content-center">
                <div className="col-md-6 order-md-2 bg-light p-5 rounded">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label txt-primary">Your Name</label>
                            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label txt-primary">Your Email</label>
                            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label txt-primary">Message</label>
                            <textarea className="form-control" id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col-md-6 order-md-1 mt-5">
                <h2 className="mb-4 text-center txt-primary fw-bolder fs-1">Contact Us</h2>
                <p className="fs-6 text-center p-5">
                    If you have any questions or need more information, please feel free to contact us using the form on the right. We will get back to you as soon as possible.
                </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
