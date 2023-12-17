import React from 'react'

const ContactForm = () => {
    return (
        <div className="container">
            <h2><b>Tell Us Your Experience </b></h2>
            <form className='mt-4'>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">Your Name</label>
                    <input type="text" className="form-control" id="name" aria-describedby="name" required={true} min={3} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Your Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required={true} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Subject" className="form-label">Subject</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required={true} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"> Your Message</label>
                    {/* <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /> */}
                    <textarea name="your-message" cols="20" rows="10" className="form-control" aria-invalid="false" style={{height:'90px'}}></textarea>
                </div>
                <button type='submit' className="btn1">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm