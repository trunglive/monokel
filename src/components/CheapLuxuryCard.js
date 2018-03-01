import React, { Component } from 'react';

class CheapLuxuryCard extends Component {
  render() {
    const { name, price, image_url } = this.props;

    return (
      <div className="cheap-luxury-list__gallery">
        <div className="square-card-info">
          <p className="square-card-info__name">{name}</p>
          <p className="square-card-info__price">${price}</p>
        </div>
        <img src={image_url} />
      </div>
    );
  }
}

export default CheapLuxuryCard;