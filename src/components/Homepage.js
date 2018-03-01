import React, { Component } from 'react';
import Header from './Header';
import FeaturedProperties from './FeaturedProperties';
import MeetMonokel from './MeetMonokel';
import NewlyFeatured from './NewlyFeatured';
import CheapLuxury from './CheapLuxury';
import Footer from './Footer';

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <Header />
        <div className="featured-properties-inner">
          <p className="featured-properties-inner__text">Featured Properties</p>
        </div>
        <div className="featured-properties-container">
          <FeaturedProperties />
        </div>
        
        <MeetMonokel />
        <NewlyFeatured />
        <CheapLuxury />
        <Footer />
      </div>
    )
  }
}

export default Homepage;