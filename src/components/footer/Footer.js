import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../button/Button'
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    JOIN THE ADVENTURE NEWSLETTER TO RECEIVE OUR BEST VACATION DEALS
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <input-areas>
                <input type="email" name="email" placeholder="Your email" className="footer-input" />
                <Button buttonStyle="btn--outline">Subscribe</Button>
                </input-areas>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Videos</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            TRVL <i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <small className='website-rights'>Sunrider © 2021</small>
                    <div className="social-icons">
                        <Link className="social-icon-link instagram" to="/" target="_blank" aria-label="Facebook">
                            <i className="fab fa-facebook-f" />
                        </Link>
                        <Link className="social-icon-link facebook" to="/" target="_blank" aria-label="Instagram">
                            <i className="fab fa-instagram" />
                        </Link>
                        <Link className="social-icon-link linkedin" to="/" target="_blank" aria-label="Instagram">
                            <i className="fab fa-linkedin" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
