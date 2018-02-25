import React, { Component } from 'react';
import HomeCard from './HomeCard';
import listing from '../utils/data';

class FeaturedProperties extends Component {
  state = {
    listing: ''
  }

  componentWillMount() {
    this.setState({
      listing
    })
  }

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
          {this.state.listing.map(home => (
            <HomeCard {...home} />
          ))}
      
        </div>
        
      </section>
    )
  }
}

export default FeaturedProperties;