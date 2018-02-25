import React, { Component } from 'react';


class HomeCard extends Component {
  

  render() {
    const { name, price, bedrooms,bathrooms, image_url } = this.props;
    console.log(name, price, bedrooms, bathrooms);

    return (
      <div className="featured-properties-card-container">
        <img src={image_url} alt="photo" />
        <div className="featured-properties-card-container__info">
          name - {name}
          price - {price}
          bedrooms - {bedrooms}
          bathrooms - {bathrooms}
        </div>
      </div>
    );
  }
}

export default HomeCard;

