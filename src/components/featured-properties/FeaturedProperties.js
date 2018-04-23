import React, { Component } from "react";
import HomeCard from "./HomeCard";
import { listing } from "../../utils/data";
import { Dropdown } from "semantic-ui-react";
import * as Option from "../../utils/helpers";
import { HouseSelectors } from "../../selectors/HouseSelectors";

export default class FeaturedProperties extends Component {
  state = {
    listing: "",
    typeValue: "All",
    sortValue: "Default"
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
    const { listing, typeValue, sortValue } = this.state;
    const { searchValue } = this.props;

    return (
      <section className="featured-properties">
        <div className="menu-background">Featured Properties</div>
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
          {HouseSelectors(listing, typeValue, sortValue, searchValue).map(
            home => <HomeCard key={home.name} {...home} />
          )}
        </div>
      </section>
    );
  }
}
