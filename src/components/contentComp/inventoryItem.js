import React from 'react';

class InventoryItem extends React.Component {
    render() {
      
      var {title, image} = this.props;

      return (
        
        <div className="col-12 col-sm-4 inventory-item-wrap">
            <div className="inventory-item-title">{title}</div>
            <img className="inventory-item-image" src={process.env.PUBLIC_URL + '/images/' + image + ".png"} />
        </div>


      );
    }
  }

export default InventoryItem;