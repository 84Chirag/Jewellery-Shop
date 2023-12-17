import React from 'react';
import cardimg from '../../assets/92.png';
import cardimg2 from '../../assets/94.png';
import cardimg3 from '../../assets/95.png';
import cardimg4 from '../../assets/96.png';

const Services = () => {
    return (
        <>
            <div className='container my-5'>
                <h2 className='text-center' style={{ fontWeight: 'bolder' }}><b>Our Services</b></h2>
                <div className="container">
                    <h1 className="text-center fade-in">We invite you to visit the spa paradise and feel the power of relaxation.</h1>
                    <div className="cardbody">
                        <div className="cardgrp" style={{ width: '10rem' }}>
                            <div><img src={cardimg} alt="..." className="card-img" /></div>
                            <div className="title mt-2"><h3>Free Shipping</h3></div>
                            <div className="desc"><p>Free Shipping On All US Order Or Order Above $200</p></div>
                        </div>
                        <div className="cardgrp" style={{ width: '10rem' }}>
                            <div><img src={cardimg2} alt="..." className="card-img" /></div>
                            <div className="title mt-2"><h3>Support 24/7</h3></div>
                            <div className="desc"><p>Contact Us 24 Hours A Day, 7 Days A Week</p></div>
                        </div>
                        <div className="cardgrp1" style={{ width: '10rem' }}>
                            <div><img src={cardimg3} alt="..." className="card-img" /></div>
                            <div className="title mt-2"><h3>30 Days Return</h3></div>
                            <div className="desc"><p>Simply Return It Within 30 Days For An Exchange</p></div>
                        </div>
                        <div className="cardgrp1" style={{ width: '10rem' }}>
                            <div><img src={cardimg4} alt="..." className="card-img" /></div>
                            <div className="title mt-2"><h3>100% Payment Secure</h3></div>
                            <div className="desc"><p> We Ensure Secure Payment With PEV</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services