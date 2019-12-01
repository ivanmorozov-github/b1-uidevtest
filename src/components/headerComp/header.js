import React from 'react';

function Header() {
  return (

    <div className="header">
        <div className="container">
            <div className="row align-items-center h-top">
                <div className="col-6 d-flex justify-content-start px-none"><img className="h-logo" src="./images/logo-block-shop.png"/></div>
                <div className="col-6 d-flex justify-content-end px-none"><img className="h-search" src="./icons/search-selected.png"/></div>
            </div>
            <div className="row h-bottom">
                <div className="col-12 col-sm-6 px-none">
                    <div className="page-title"><h2 className="circ-b">A new way to shop safely</h2></div>
                    <div className="page-subtitle">
                        <p className="hide-smallsrceen">We’re a service that’s supported on blockchain by the cryptocurrency EOS, so you can be sure that our sellers are trusted and verified.</p>
                        <p className="hide-largescreen">Be sure that your purchase is verified and secure on blockchain with the cryptocurrency EOS.</p>
                    </div>
                    <div className="input-group search-form">
                        <div className="input-group-prepend">
                            <button className="btn btn-secondary" type="button"><img className="h-search" src="./icons/search-light.png"/></button>
                        </div>
                        <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1"/>
                    </div>
                </div>
                <div className="col-12 col-sm-6 px-none d-flex align-items-end">
                    <div className="featured-product">
                        <img className="featured-product-image" src="./images/product-2.png"/>
                    </div>
                </div>
            </div>
        </div>
    </div>

  );
}

export default Header;
