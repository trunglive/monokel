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
      <div>
        <Header />
        <FeaturedProperties />
        <MeetMonokel />
        <NewlyFeatured />
        <CheapLuxury />
        <Footer />
      </div>
    )
  }
}

export default Homepage;