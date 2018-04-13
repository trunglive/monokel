import React from "react";
import NewlyFeaturedCard from "./NewlyFeaturedCard";
import { newlyFeatured } from "../../utils/data";

const NewlyFeatured = () => (
  <div className="card newly-featured">
    <p className="card__title newly-featured__title">Newly Featured</p>
    <div className="card-list newly-featured-list">
      {newlyFeatured.map(home => (
        <NewlyFeaturedCard key={home.name} {...home} />
      ))}
    </div>
  </div>
);

export default NewlyFeatured;
