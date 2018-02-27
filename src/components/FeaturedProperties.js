import React, { Component } from 'react';
import HomeCard from './HomeCard';
import listing from '../utils/data';
import TypeDropDown from './TypeFilter';
import { Dropdown } from 'semantic-ui-react';

class FeaturedProperties extends Component {
  state = {
    filteredListing: '',
    dropdownValue: ''
  }

  componentWillMount() {
    this.setState({
      filteredListing: listing
    })
  }

  render() {

    return (
      <section className="featured-properties">
        <div className="featured-properties-nav">
          <p className="featured-properties-nav__text">Featured Properties</p>
          <div className="featured-propeties-nav__filter">
            <TypeDropDown />
        
          </div>
        </div>
        <div className="featured-properties-card">
          {this.state.filteredListing.map(home => (
            <HomeCard key={home.name} {...home} />
          ))}
      
        </div>
        
      </section>
    )
  }
}

export default FeaturedProperties;
