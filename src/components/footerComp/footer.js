import React from 'react';

function Footer() {
  return (


    <div className="full-width px-none footer">
    <div className="container">
    <div className="row footer-wrap">
        <div className="col-12 col-md-6 col-lg-5 footer-logo">
        <img className="h-logo" src="./images/logo-block-shop.png"/>
        </div>
        <div className="col-6 col-md-3 col-lg-2 about">
        <h5>About Us</h5>
        <ul className="list-unstyled">
            <li>Story</li>
            <li>Contact</li>
            <li>Blog</li>
        </ul>
        </div>
        <div className="col-6 col-md-3 col-lg-2 customer-care">
        <h5>Customer Care</h5>
        <ul className="list-unstyled">
            <li>FAQ</li>
            <li>Warranty</li>
            <li>Returns</li>
        </ul>
        </div>
        <div className="col-12 col-md-12 col-lg-3 follow-us">
        <h5>Follow Us</h5>
        <span className="i-social-wrap"><img className="i-social-img" src="./social/i-facebook.svg"/></span>
        <span className="i-social-wrap"><img className="i-social-img" src="./social/i-twitter.svg"/></span>
        <span className="i-social-wrap"><img className="i-social-img" src="./social/i-instagram.svg"/></span>
        <span className="i-social-wrap"><img className="i-social-img" src="./social/i-pinterest.svg"/></span>
        </div>
        <div className="col-12 col-md-12 col-lg-3 copyright">
        <p>Copyright Block Shop 2019 <br /> All Rights Reserved</p>
        </div>
    </div>
    </div>
    </div>

);
}

export default Footer;