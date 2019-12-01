import React from 'react';
import CarouselArrow from './carouselArrow';
import inventoryitems from './inventoryitems.json';
import InventoryItem from './inventoryItem';

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
                    <span className="mr-3"><CarouselArrow image="left-arrow.png" /></span>
                    <span className="ml-3"><CarouselArrow image="right-arrow.png" /></span>
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
                {
                    inventoryitems.map((inventoryitems, i) => 
                        <InventoryItem image={inventoryitems.image} title={inventoryitems.title} key={i} />
                    )
                }
            </div>
        </div>

    </div>

);
}

export default Content;