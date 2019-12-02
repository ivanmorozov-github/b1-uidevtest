import React from 'react';

// component to render product rating (stars, 4 + 1) 

class StarRating extends React.Component {
    render() {
      
      var {image} = this.props;

      return (

        <div className="col-4 px-none star-rating-block">
          <ul className="d-flex list-unstyled">
            <li><img className="star-rating-image" src={process.env.PUBLIC_URL + '/icons/star-rate-selected.png'} /></li>
            <li><img className="star-rating-image" src={process.env.PUBLIC_URL + '/icons/star-rate-selected.png'} /></li>
            <li><img className="star-rating-image" src={process.env.PUBLIC_URL + '/icons/star-rate-selected.png'} /></li>
            <li><img className="star-rating-image" src={process.env.PUBLIC_URL + '/icons/star-rate-selected.png'} /></li>
            <li><img className="star-rating-image" src={process.env.PUBLIC_URL + '/icons/star-rate.png'} /></li>
          </ul>
        </div>
        
      );
    }
  }

export default StarRating;
