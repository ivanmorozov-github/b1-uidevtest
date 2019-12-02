import React from 'react';

// main contents section : Shop Now button (a Bootstrap version)

class ShopNowBttn extends React.Component {
    constructor() {
        super();
            this.bttntitle = "Shop Now"
    }
    render() {
      return (
        
        <button type="button" className="btn btn-dark bttn-shop-now">
            {this.bttntitle}
        </button>

    );
  }
}

export default ShopNowBttn;