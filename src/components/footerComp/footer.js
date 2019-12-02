import React from 'react';
import FooterAbout from './footerAbout';
import customercarelinks from './customercarelinks.json';
import FooterCustomerCare from './footerCustomercare';
import FooterFollowUs from './footerFollowus';

// footer section layout

function Footer() {
  return (


    <div className="full-width px-none footer">
        <div className="container">
            <div className="row footer-wrap">
                <div className="col-12 col-md-6 col-lg-5 footer-logo">
                    <img className="h-logo" src="./images/logo-block-shop.png"/>
                </div>
                <div className="col-6 col-md-3 col-lg-2 about">
                    <FooterAbout />
                </div>
                <div className="col-6 col-md-3 col-lg-2 customer-care">
                    <ul className="list-unstyled">
                        <li><h5>Customer Care</h5></li>
                        {
                            customercarelinks.map((customercarelinks, i) => 
                                <FooterCustomerCare name={customercarelinks.name} link={customercarelinks.link} key={i} />
                            )
                        }
                    </ul>
                </div>
                <div className="col-12 col-md-12 col-lg-3 follow-us">
                    <FooterFollowUs />
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