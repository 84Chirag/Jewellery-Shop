import React from 'react'
import banner1 from '../../assets/banner1-1.jpg'
import banner2 from '../../assets/banner1-2.jpg'
import banner3 from '../../assets/banner1-3.jpg'
import banner4 from '../../assets/banner1-4.jpg'

const Banner = () => {
    return (
        <>
            <div className="container">
                <div className="banner">
                    <div className="bannerimg">
                        <img src={banner1} alt="banner1" />
                        <div className="bannertxt">
                            <div className="textcontent1">
                                <h6>Beautiful</h6>
                                <h5>Wedding</h5>
                                <h5>Rings</h5>
                                <p><a href="http://corano.mallthemes.com/shop/" target="_blank" rel="noopener noreferrer">Shop Now</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="bannerimg"><img src={banner2} alt="banner1" />
                        <div className="bannertxt1">
                            <div className="textcontent2">
                                <h6>EARRING</h6>
                                <h5>Tangerine Floral</h5>
                                <h5>Earring</h5>
                                <p><a href="http://corano.mallthemes.com/shop/" target="_blank" rel="noopener noreferrer">Shop Now</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="bannerimg"><img src={banner3} alt="banner1" />
                        <div className="bannertxt2">
                            <div className="textcontent3">
                                <h6>NEW ARRIVALS</h6>
                                <h5>Pearl</h5>
                                <h5>Necklaces</h5>
                                <p><a href="http://corano.mallthemes.com/shop/" target="_blank" rel="noopener noreferrer">Shop Now</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="bannerimg"><img src={banner4} alt="banner1" />
                        <div className="bannertxt3">
                            <div className="textcontent4">
                                <h6>NEW DESIGN</h6>
                                <h5>Diamond</h5>
                                <h5>Jewelry</h5>
                                <p><a href="http://corano.mallthemes.com/shop/" target="_blank" rel="noopener noreferrer">Shop Now</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner