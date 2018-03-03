import React, { Component } from 'react';
import NewlyFeaturedCard from './NewlyFeaturedCard';
import { newlyFeatured } from '../utils/data';

const NewlyFeatured = () => (
  <div className="newly-featured">
    <p className="newly-featured-title">Newly Featured</p>
    <div className="newly-featured-list">
      {newlyFeatured.map(home => (
        <NewlyFeaturedCard key={home.name} {...home} />
      ))}
    </div>
  </div>
);

export default NewlyFeatured;
