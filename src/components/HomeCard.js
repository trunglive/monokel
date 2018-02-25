import React, { Component } from 'react';


class HomeCard extends Component {
  
  render() {
    const { name, price, type, bedrooms, bathrooms, area, image_url } = this.props;
    console.log(name, price, bedrooms, bathrooms);

    return (
      <div className="featured-properties-card-container">
        <img src={image_url} alt="photo" />
        <div className="featured-properties-card-container__info">
          <div>name - {name}</div>
          <div>price - {price}</div>
          <div>type - {type}</div>
          <div>bedrooms - {bedrooms}</div>
          <div>bathrooms - {bathrooms}</div>
          <div>size - {area}</div>
        </div>
      </div>
    );
  }
}

export default HomeCard;

