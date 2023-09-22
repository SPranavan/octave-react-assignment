const ContactUs = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <p>Phone: +94771319339</p>
            <h1>Email</h1>
            <p>spranavan008@gmail.com</p>

            <h2>Contact Form</h2>
            <form onSubmit="">
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
                <button type="submit" className="btn btn-primary">
                Submit
                </button>
            </form>
        </div>
    )
}

export default ContactUs;