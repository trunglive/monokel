import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="nav-buttons">
          <div className="nav-buttons-set">
            <div className="nav-buttons-set__sign-up">
              <i className="ion-ios-personadd-outline" />
              <span className="sign-up-text">Sign up</span>
            </div>
            <div className="nav-buttons-set__divider" />
            <div className="nav-buttons-set__log-in">
              <i className="ion-ios-person-outline" />
              <span>Log in</span>
            </div>
          </div>

          <div className="logo">
            <p className="logo__text">Monokel</p>
          </div>

          <div className="nav-buttons__bookmarks">
            <i className="ion-ios-star-outline" />
            <span>Your bookmarks</span>
          </div>
        </div>

        <div className="search-group">
          <div className="search-group__content">
            <p>Monokel is your search engine for finding homes in the U.S.,</p>
            <p className="search-group__content--bold">in which city do you want to start?</p>
          </div>
          <div className="search-group__input">
            <div className="search-group__input--bar">search input</div>
            <div className="rectangle-button">FIND button</div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
