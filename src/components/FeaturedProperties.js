import React, { Component } from 'react';
import HomeCard from './HomeCard';

class FeaturedProperties extends Component {
  render() {
    return (
      <section className="featured-properties">
        <div className="featured-properties-nav">
          <p className="featured-properties-nav__text">Featured Properties</p>
          <div className="featured-propeties-nav__filter">
            <button>
              Type
            </button>
            <button>
              Price
            </button>
            <button>
              Size
            </button>
            <button>
              Rooms
            </button>
          </div>
        </div>
        <div className="featured-properties-card">
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
        </div>
        
      </section>
    )
  }
}

export default FeaturedProperties;