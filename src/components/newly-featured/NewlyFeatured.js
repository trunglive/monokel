import React, { Component } from "react";

import NewlyFeaturedCard from "./NewlyFeaturedCard";
import { newlyFeatured } from "../../utils/data";

const NewlyFeatured = () => (
  <div className="card newly-featured" id="card-list">
    <div className="title-and-arrow">
      <div className="card__title newly-featured__title">Newly Featured</div>
      <div className="arrow-group">
        <img
          className="circle-arrow__icon arrow-left"
          src="/icons/arrow-right.svg"
        />
        <img
          className="circle-arrow__icon arrow-right"
          src="/icons/arrow-right.svg"
        />
      </div>
    </div>

    <div className="card-list newly-featured-list">
      {newlyFeatured.map(home => (
        <NewlyFeaturedCard key={home.name} {...home} />
      ))}
    </div>
  </div>
);

export default NewlyFeatured;
