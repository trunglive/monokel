import React, { Component } from 'react';
import HomeCard from './HomeCard';
import { listing } from '../utils/data';
import TypeDropDown from './TypeFilter';
import { Dropdown } from 'semantic-ui-react';
import * as Option from '../utils/helpers';

class FeaturedProperties extends Component {
  state = {
    listing: '',
    typeValue: 'all',
    sortValue: ''
  };

  onTypeChange = (event, { value }) => {
    this.setState({
      typeValue: value
    });
  };

  onSortChange = (event, { value }) => {
    this.setState({
      sortValue: value
    });
  };

  componentWillMount() {
    this.setState({
      listing
    });
  }

  render() {
    const { listing, sortValue } = this.state;

    return (
      <section className="featured-properties">
        <div className="featured-properties-card-list">
          <div className="featured-properties-nav">
            <Dropdown
              upward
              floating
              options={Option.type}
              text="Type"
              onChange={this.onTypeChange}
              className="type-dropdown"
            />

            <Dropdown
              upward
              floating
              options={Option.sort}
              text="Sort by"
              onChange={this.onSortChange}
              className="sort-dropdown"
            />
          </div>

          {this.state.sortValue === 'default'
            ? null
            : sorting(listing, sortValue)}
        </div>
      </section>
    );
  }
}

export default FeaturedProperties;

const sorting = (array, value) => {
  return array
    .sort((currentHome, nextHome) => {
      return currentHome[value] > nextHome[value] ? 1 : -1;
    })
    .map(home => <HomeCard key={home.name} {...home} />);
};

// {this.state.sortValue === 'default'
//             ? listing.map(home => <HomeCard key={home.name} {...home} />)
//             : sorting(listing, this.state.sortValue)}

// {this.state.typeValue === 'all'
//             ? listing.map(home => <HomeCard key={home.name} {...home} />)
//             : listing
//                 .filter(
//                   home => home.type.toLowerCase() === this.state.typeValue
//                 )
//                 .map(filteredHome => (
//                   <HomeCard key={filteredHome.name} {...filteredHome} />
//                 ))}
