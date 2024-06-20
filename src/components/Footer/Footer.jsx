import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    {/* <img src={assets.logo} alt="" /> */}
                    <h1 className='head'>Foody.</h1>
                    <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your carvings and elevate your dining experience, one delicious meal at a time.</p>
                    <div className="footer-social-icons">
                        <Link to={"https://x.com/rshobhit255"}>
                        <img src={assets.twitter_icon} alt=""  />
                        </Link>
                        <Link to={"https://www.linkedin.com/in/shobhit-rastogi-/"}>
                        <img src={assets.linkedin_icon} alt="" />
                        </Link>
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <a target='blank' href={"/"}>
                        <li>Home</li>
                        </a>
                        <a target='blank' href={"#explore-menu"}>
                        <li>Menu</li>
                        </a>
                        <a target='blank' href="https://shobhitrastogi-portfolio.netlify.app">
                        <li>Portfolio</li>
                        </a>
                        <a target='blank' href="https://blog-rastogi.netlify.app">
                        <li>Blog</li>
                        </a>
                         <a target='blank' href="https://youtuve.netlify.app">
                        <li>Youtube</li>
                        </a>
                        <a target='blank' href="https://inotebook-rastogi.netlify.app">
                        <li>iNotebook</li>
                        </a>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 9506096144</li>
                        <li>shobhit255@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2024 © Foody.com - All Right Reserved.
            </p>
        </div>
    )
}

export default Footer