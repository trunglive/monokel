import React from "react";

const CheapLuxuryCard = ({ name, price, image_url }) => (
  <div className="card-list__gallery cheap-luxury-list__gallery">
    <div className="card-info square-card-info">
      <p className="card-info__name square-card-info__name">{name}</p>
      <p className="card-info__price square-card-info__price">${price}</p>
    </div>
    <img src={image_url} />
  </div>
);

export default CheapLuxuryCard;
