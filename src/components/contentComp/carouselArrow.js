import React from 'react';

class CarouselArrow extends React.Component {
    render() {
      return (
        <img className="carousel-arrow" src={process.env.PUBLIC_URL + '/icons/' + this.props.image}  alt="carousel-arrow" />
      );
    }
  }

export default CarouselArrow;