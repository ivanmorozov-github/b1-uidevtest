import React from 'react';

// footer section : Customer Care, list of links

class FooterCustomerCare extends React.Component {
  render() {

    var {name, link} = this.props;
      
    return (

      <li><a href={link}>{name}</a></li>

    );
  }
}

export default FooterCustomerCare;