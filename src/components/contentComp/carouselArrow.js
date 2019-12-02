import React from 'react';

// main contents section : left and right arrows rendering to be later included in the carousel layout

class CarouselArrow extends React.Component {
    render() {
      return (

        <img className="carousel-arrow" src={process.env.PUBLIC_URL + '/icons/' + this.props.image}  alt="carousel-arrow" />

    );
  }
}

export default CarouselArrow;