import React, { Component } from 'react';

const HomeCard = ({
  name,
  price,
  type,
  bedrooms,
  bathrooms,
  area,
  image_url
}) => (
  <div className="featured-properties-card-list-item">
    <img src={image_url} alt="photo" />
    <img src="/icons/bookmark-light.svg" className="bookmark-card-icon" />
    <div className="circle-arrow">
      <img className="circle-arrow__icon" src="/icons/arrow-right.svg" />
    </div>
    <div className="featured-properties-card-list-item__title">
      <div className="featured-properties-card-list-item__title--name">
        {name}
      </div>
      <div className="featured-properties-card-list-item__title--price">
        ${price}
      </div>
    </div>

    <div className="featured-properties-card-list-item__info">
      <div className="featured-properties-card-list-item__info--top">
        <div>{type}</div>
      </div>
      <div className="featured-properties-card-list-item__info--bottom">
        <div className="bedrooms-group">
          <img src="icons/bedrooms.svg" className="bedrooms-group__icon" />
          <div className="bedrooms-group__number">{bedrooms}</div>
        </div>
        <div className="bathrooms-group">
          <img src="icons/bathrooms.svg" className="bathrooms-group__icon" />
          <div className="bathrooms-group__number">{bathrooms}</div>
        </div>
        <div className="area-group">
          <img src="icons/area.svg" className="area-group__icon" />
          <div className="area-group__number">
            {area}
            <span>
              m
              <sup>2</sup>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomeCard;