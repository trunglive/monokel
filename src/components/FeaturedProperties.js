import React, { Component } from 'react';
import HomeCard from './HomeCard';
import listing from '../utils/data';
import TypeDropDown from './TypeFilter';
import { Dropdown } from 'semantic-ui-react';
import * as Option from '../utils/helpers';

class FeaturedProperties extends Component {
  state = {
    listing: '',
    typeValue: 'all'
  };

  onTypeChange = (event, { value }) => {
    this.setState({
      typeValue: value
    });
  };

  componentWillMount() {
    this.setState({
      listing
    });
  }

  render() {
    const { listing } = this.state;
    return (
      <section className="featured-properties">
        <div className="featured-properties-nav">
          <p className="featured-properties-nav__text">Featured Properties</p>
          <div className="featured-propeties-nav__filter">
            <Dropdown
              upward
              floating
              options={Option.type}
              text="Type"
              onChange={this.onTypeChange}
            />
          </div>
        </div>
        <div className="featured-properties-card">
          {this.state.typeValue === 'all'
            ? listing.map(home => <HomeCard key={home.name} {...home} />)
            : listing
                .filter(
                  home => home.type.toLowerCase() === this.state.typeValue
                )
                .map(filteredHome => (
                  <HomeCard key={filteredHome.name} {...filteredHome} />
                ))}
        </div>
      </section>
    );
  }
}

export default FeaturedProperties;
