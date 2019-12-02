import React from 'react';
import StarRating from './starRating'

// content section : array of most popular items, based on mostpopularitems.json

class MostPopularItem extends React.Component {
    render() {
      
      var {image, title, currency, price} = this.props;

      return (

        <div className="col-4 mp-item-block">
          <ul className="list-unstyled">
            <li><img className="mp-item-image" src={process.env.PUBLIC_URL + '/images/' + image + ".png"} /></li>
            <li><span className="mp-item-title">{title}</span></li>
            <li><span className="mp-item-rating"><StarRating /></span></li>
            <li><span className="mp-item-price">${price}</span></li>
          </ul>
        </div>

      );
    }
  }

export default MostPopularItem;