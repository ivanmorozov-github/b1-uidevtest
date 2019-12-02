import React from 'react';
import CarouselArrow from './carouselArrow';
import MostPopularItem from './mostpopularItem';
import mostpopularitems from './mostpopularitems.json';
import InventoryItem from './inventoryItem';
import inventoryitems from './inventoryitems.json';


function Content() {
  return (

    <div className="full-width px-none main">

        <div className="container">
            <div className="row">
                <div className="most-popular-wrap">
                    <div className="col-12 col-md-3 col-lg-4 float-left">
                        <div className="mp-title">Most popular</div>
                        <div className="mp-subtitle">We know you'll love these.</div> 
                        <div className="justify-content-center justify-content-sm-start mp-carousel-arrows">
                            <span className="mr-3"><CarouselArrow image="left-arrow.png" /></span>
                            <span className="ml-3"><CarouselArrow image="right-arrow.png" /></span>
                        </div>
                    </div>
                    <div className="col-12 col-md-9 col-lg-8 float-right ">
                        <div className="row mp-items-list">
                            {
                                mostpopularitems.map((mostpopularitems, i) => 
                                    <MostPopularItem image={mostpopularitems.image} title={mostpopularitems.title} price={mostpopularitems.price} key={i} />
                                )
                            }
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