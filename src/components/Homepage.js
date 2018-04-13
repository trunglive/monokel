import React, { Component } from "react";
import Header from "./Header";
import FeaturedProperties from "./FeaturedProperties";
import MeetMonokel from "./MeetMonokel";
import NewlyFeatured from "./NewlyFeatured";
import CheapLuxury from "./CheapLuxury";
import Footer from "./Footer";

export default class Homepage extends Component {
  state = {
    value: ""
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
        <Header onSearchChange={this.handleSearchChange} searchValue={value} />
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
