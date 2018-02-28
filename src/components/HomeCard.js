import React, { Component } from 'react';

class HomeCard extends Component {
  render() {
    const {
      name,
      price,
      type,
      bedrooms,
      bathrooms,
      area,
      image_url
    } = this.props;
    // console.log(name, price, bedrooms, bathrooms);

    return (
      <div className="featured-properties-card-container">
        <img src={image_url} alt="photo" />
        <div className="featured-properties-card-container__title">
          <div className="featured-properties-card-container__title--name">
            {name}
          </div>
          <div className="featured-properties-card-container__title--price">
            ${price}
          </div>
        </div>

        <div className="featured-properties-card-container__info">
          <div className="featured-properties-card-container__info--top">
            <div>{type}</div>
          </div>
          <div className="featured-properties-card-container__info--bottom">
            <div>{bedrooms} bedrooms</div>
            <div>{bathrooms} bathrooms</div>
            <div>{area} m2</div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeCard;
