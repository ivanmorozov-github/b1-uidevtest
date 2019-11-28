import React from 'react';
import './App.css';
// import Hello from './Hello.js';
// import logo from './logo.svg';

function App() {
  return (
    <div class="container-fluid full-width">

      <div class="header">
        <div class="container">
          <div class="row align-items-center h-top">
            <div class="col-6 d-flex justify-content-start px-none"><img class="h-logo" src="./images/logo-block-shop.png"/></div>
            <div class="col-6 d-flex justify-content-end px-none"><img class="h-search" src="./icons/search-selected.png"/></div>
          </div>
          <div class="row h-bottom">
            <div class="col-12 col-sm-6 px-none">
              <div class="page-title"><h2 class="circ-b">A new way to shop safely</h2></div>
              <div class="page-subtitle">
                <p>We’re a service that’s supported on blockchain by the cryptocurrency EOS, so you can be sure that our sellers are trusted and verified.</p>
              </div>
              <div class="input-group search-form">
                <div class="input-group-prepend">
                  <button class="btn btn-secondary" type="button"><img class="h-search" src="./icons/search-light.png"/></button>
                </div>
                <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1"/>
              </div>
            </div>
            <div class="col-12 col-sm-6 px-none d-flex align-items-end">
              <div class="featured-product">
                <img class="featured-product-image" src="./images/product-2.png"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="full-width px-none main">
        <div class="container">
          <div class="row">
            <div class="most-popular-wrap">
              <div class="col-12 col-md-4 float-left">
                <div class="mp-title">Most popular</div>
                <div class="mp-subtitle">We know you'll love these.</div>
                  
                <div class="justify-content-center justify-content-sm-start mp-carousel-arrows">
                  <img class="mr-3 carousel-arrow" src="./icons/left-arrow.png" />
                  <img class="ml-3 carousel-arrow" src="./icons/right-arrow.png" />
                </div>

              </div>
              <div class="col-12 col-md-8 float-right ">
                <div class="row mp-items-list">
                  <div class="col-4 mp-item-block">
                    <img class="mp-item-image" src="./images/product-1.png" />
                    <ul class="list-unstyled">
                      <li><span class="mp-item-title">Hat Chair</span></li>
                      <li><span class="mp-item-rating"></span></li>
                      <li><span class="mp-item-price">$159.99</span></li>
                    </ul>
                  </div>
                  <div class="col-4 mp-item-block">
                    <img class="mp-item-image" src="./images/product-3.png" />
                    <ul class="list-unstyled">
                      <li><span class="mp-item-title">XAC Modern Lamp</span></li>
                      <li><span class="mp-item-rating"></span></li>
                      <li><span class="mp-item-price">$50.99</span></li>
                    </ul>
                  </div>
                  <div class="col-4 mp-item-block">
                    <img class="mp-item-image" src="./images/room-1.png" />
                    <ul class="list-unstyled">
                      <li><span class="mp-item-title">Circle Chair</span></li>
                      <li><span class="mp-item-rating"></span></li>
                      <li><span class="mp-item-price">$200.99</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-4 justify-content-center justify-content-sm-start mp-bttn-shop-now">
                <button type="button" class="btn btn-dark bttn-shop-now">Shop Now</button>
              </div>
            </div>
          </div>

        </div>



        <div class="full-width px-none">
          <div class="row inventory-section">
            <div class="col-12 col-sm-4 inventory-item-wrap">
              <div class="inventory-item-title">Minimal</div>
              <img class="inventory-item-image" src="./images/room-2.png"/>
            </div>
            <div class="col-12 col-sm-4 inventory-item-wrap">
              <div class="inventory-item-title">New Rustic</div>
              <img class="inventory-item-image" src="./images/room-3.png"/>
            </div>
            <div class="col-12 col-sm-4 inventory-item-wrap">
              <div class="inventory-item-title">Modern</div>
              <img class="inventory-item-image" src="./images/room-4.png"/>
            </div>
          </div>
        </div>
      </div>


      <div class="full-width px-none footer">
        <div class="container">
          <div class="row footer-wrap">
            <div class="col-12 col-md-6 col-lg-5 footer-logo">
              <img class="h-logo" src="./images/logo-block-shop.png"/>
            </div>
            <div class="col-6 col-md-3 col-lg-2 about">
              <h5>About Us</h5>
              <ul class="list-unstyled">
                <li>Story</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
            </div>
            <div class="col-6 col-md-3 col-lg-2 customer-care">
              <h5>Customer Care</h5>
              <ul class="list-unstyled">
                <li>FAQ</li>
                <li>Warranty</li>
                <li>Returns</li>
              </ul>
            </div>
            <div class="col-12 col-md-12 col-lg-3 follow-us">
              <h5>Follow Us</h5>
              <span class="i-social-wrap"><img class="i-social-img" src="./social/i-facebook.svg"/></span>
              <span class="i-social-wrap"><img class="i-social-img" src="./social/i-twitter.svg"/></span>
              <span class="i-social-wrap"><img class="i-social-img" src="./social/i-instagram.svg"/></span>
              <span class="i-social-wrap"><img class="i-social-img" src="./social/i-pinterest.svg"/></span>
            </div>
            <div class="col-12 col-md-12 col-lg-3 copyright">
              <p>Copyright Block Shop 2019 <br /> All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
