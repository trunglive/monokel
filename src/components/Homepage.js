import React, { Component } from "react";
import Header from "./navigation/Header";
import FeaturedProperties from "./featured-properties/FeaturedProperties";
import MeetMonokel from "./meet-monokel/MeetMonokel";
import NewlyFeatured from "./newly-featured/NewlyFeatured";
import CheapLuxury from "./cheap-and-luxury/CheapLuxury";
import Footer from "./navigation/Footer";

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
