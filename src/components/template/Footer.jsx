import React, { useState, useEffect } from 'react'
import Facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import Xtwitter from '../../assets/twitter.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop, faPhone, faAnglesUp } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const [showButton, setShowButton] = useState(false);

    // Function to handle scrolling and update the visibility of the button
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };
    // function for scroll to top when window's screen's Y axis is greater than 100 
    const bottomtotop = () =>{
        if (window.scrollY > 100) {
            window.scrollTo({top:0, behavior:'smooth'});
        }
    };

    // Add a scroll event listener when the component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {showButton && (
                <div className="downup">
                    {/* using that function with condition of onclick */}
                    <button href="#top" className="uparrow" onClick={bottomtotop}>
                        <FontAwesomeIcon icon={faAnglesUp} size="xl" className="angleup" />
                    </button>
                </div>
            )}
            <div className='footer'>
                <div className='container footcontent'>
                    <div className="foot1"><p>Copyright © 2023 <a href="#">Chirag Gour</a><br /> All rights reserved. </p></div>
                    <div className="foot2">
                        <ul className='menulist'>
                            <h5>Useful Links</h5>
                            <li className='menuitem'><a href='#'>Home</a></li>
                            <li className='menuitem'><a href='#'>About</a></li>
                            <li className='menuitem'><a href='#'>Store</a></li>
                            <li className='menuitem'><a href='#'>Contact</a></li>
                        </ul>
                    </div>
                    <div className="foot3">
                        <h5><b>Contact Us</b></h5>
                        <div className="contact">
                            <p><a href='https://maps.app.goo.gl/QmNvRuVEZjBKbNAx7' target='_blank' ><FontAwesomeIcon icon={faShop} /> Ghatkopar </a></p>
                            <p><a href="tel:+1234567890"><FontAwesomeIcon icon={faPhone} /> +91 820 882 0220 </a></p>
                        </div>
                    </div>
                    <div className="foot4">
                        <h5><b>Follow Us</b></h5>
                        <div className="social">
                            <Link to='https://www.facebook.com/' target='_blank' className='facebookicon' ><img src={Facebook} alt="Facebook" className='icon' /></Link>
                            <Link to='https://www.instagram.com/accounts/login/' target='_blank' className='instaicon'><img src={instagram} alt="instagram" className='icon1' /></Link>
                            <Link to='https://twitter.com/?lang=en' target='_blank' className='xicon'><img src={Xtwitter} alt="Xtwitter" className='icon' /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer