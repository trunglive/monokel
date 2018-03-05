import React, { Component } from 'react';

const NewlyFeaturedCard = ({ name, price, image_url }) => (
  <div className="newly-featured-list__gallery">
    <div className="thin-card-info">
      <p className="thin-card-info__name">{name}</p>
      <p className="thin-card-info__price">${price}</p>
    </div>
    <img src={image_url} />
  </div>
);

export default NewlyFeaturedCard;