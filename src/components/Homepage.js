import React, { Component } from 'react';
import Header from './Header';
import FeaturedProperties from './FeaturedProperties';
import MeetMonokel from './MeetMonokel';
import NewlyFeatured from './NewlyFeatured';
import CheapLuxury from './CheapLuxury';
import Footer from './Footer';

class Homepage extends Component {
  state = {
    value: ''
  };

  handleSearchChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    const { value } = this.state;
    
    return (
      <div className="homepage">
        <Header
          onSearchChange={this.handleSearchChange}
          searchValue={value}
        />
        <div className="featured-properties-inner">
          <p className="featured-properties-inner__text">Featured Properties</p>
        </div>
        <div className="featured-properties-container">
          <FeaturedProperties searchValue={value} />
        </div>
        <MeetMonokel />
        <NewlyFeatured />
        <CheapLuxury />
        <Footer />
      </div>
    );
  }
}

export default Homepage;
