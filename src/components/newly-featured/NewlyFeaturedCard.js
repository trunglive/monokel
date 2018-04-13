import React from "react";

const NewlyFeaturedCard = ({ name, price, image_url }) => (
  <div className="card-list__gallery newly-featured-list__gallery">
    <div className="card-info thin-card-info">
      <p className="card-info__name thin-card-info__name">{name}</p>
      <p className="card-info__price thin-card-info__price">${price}</p>
    </div>
    <img src={image_url} />
  </div>
);

export default NewlyFeaturedCard;
