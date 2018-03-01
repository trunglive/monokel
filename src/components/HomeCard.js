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
            <div className="bedrooms-group">
              <img src="icons/bedrooms.svg" className="bedrooms-group__icon" />
              <div className="bedrooms-group__number">{bedrooms}</div>
            </div>

            <div className="bathrooms-group">
              <img
                src="icons/bathrooms.svg"
                className="bathrooms-group__icon"
              />
              <div className="bathrooms-group__number">{bathrooms}</div>
            </div>

            <div className="area-group">
              <img src="icons/area.svg" className="area-group__icon" />
              <div className="area-group__number">
                {area}
                <span>
                  m<sup>2</sup>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeCard;
