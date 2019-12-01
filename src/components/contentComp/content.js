import React from 'react';

function Content() {
  return (


    <div className="full-width px-none main">

        <div className="container">

        <div className="row">

            <div className="most-popular-wrap">

            <div className="col-12 col-md-4 float-left">
                <div className="mp-title">Most popular</div>
                <div className="mp-subtitle">We know you'll love these.</div> 
                <div className="justify-content-center justify-content-sm-start mp-carousel-arrows">
                <img className="mr-3 carousel-arrow" src="./icons/left-arrow.png" />
                <img className="ml-3 carousel-arrow" src="./icons/right-arrow.png" />
                </div>
            </div>

            <div className="col-12 col-md-8 float-right ">
                <div className="row mp-items-list">
                <div className="col-4 mp-item-block">
                    <img className="mp-item-image" src="./images/product-1.png" />
                    <ul className="list-unstyled">
                    <li><span className="mp-item-title">Hat Chair</span></li>
                    <li><span className="mp-item-rating"></span></li>
                    <li><span className="mp-item-price">$159.99</span></li>
                    </ul>
                </div>
                <div className="col-4 mp-item-block">
                    <img className="mp-item-image" src="./images/product-3.png" />
                    <ul className="list-unstyled">
                    <li><span className="mp-item-title">XAC Modern Lamp</span></li>
                    <li><span className="mp-item-rating"></span></li>
                    <li><span className="mp-item-price">$50.99</span></li>
                    </ul>
                </div>
                <div className="col-4 mp-item-block">
                    <img className="mp-item-image" src="./images/room-1.png" />
                    <ul className="list-unstyled">
                    <li><span className="mp-item-title">Circle Chair</span></li>
                    <li><span className="mp-item-rating"></span></li>
                    <li><span className="mp-item-price">$200.99</span></li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="col-12 col-md-4 justify-content-center justify-content-sm-start mp-bttn-shop-now">
                <button type="button" className="btn btn-dark bttn-shop-now">Shop Now</button>
            </div>

            </div>

        </div>

        </div>

        <div className="full-width px-none">
        <div className="row inventory-section">
            <div className="col-12 col-sm-4 inventory-item-wrap">
            <div className="inventory-item-title">Minimal</div>
            <img className="inventory-item-image" src="./images/room-2.png"/>
            </div>
            <div className="col-12 col-sm-4 inventory-item-wrap">
            <div className="inventory-item-title">New Rustic</div>
            <img className="inventory-item-image" src="./images/room-3.png"/>
            </div>
            <div className="col-12 col-sm-4 inventory-item-wrap">
            <div className="inventory-item-title">Modern</div>
            <img className="inventory-item-image" src="./images/room-4.png"/>
            </div>
        </div>
        </div>

    </div>

);
}

export default Content;