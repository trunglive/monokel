import React, { Component } from 'react';

const Header = ({ searchValue, onSearchChange }) => (
  <header>
    <div className="nav-buttons">
      <div className="nav-buttons-set">
        <div className="nav-buttons-set__sign-up">
          <img src="/icons/user-signup.png" className="sign-up-icon" />

          <span className="sign-up-text">Sign up</span>
        </div>
        <div className="nav-buttons-set__divider" />
        <div className="nav-buttons-set__log-in">
          <img src="/icons/user-login.png" className="log-in-icon" />

          <span>Log in</span>
        </div>
      </div>

      <div className="logo">
        <p className="logo__text">Monokel</p>
      </div>

      <div className="nav-buttons__bookmarks">
        <img src="/icons/bookmark-dark.png" className="bookmark-saved-icon" />
        <span>Your bookmarks</span>
      </div>
    </div>

    <div className="search-group">
      <div className="search-group__content">
        <p>Monokel is your search engine for finding homes in the U.S.,</p>
        <p className="search-group__content--bold">
          in which city do you want to start?
        </p>
      </div>
      <div className="search-group__input">
        <div className="search-group__input--bar">
          <input
            type="text"
            placeholder="Search homes"
            value={searchValue}
            onChange={onSearchChange}
          />
          <img src="/icons/navigation.png" className="navigation-icon" />
        </div>
        <div className="rectangle-button">Find</div>
      </div>
    </div>
  </header>
);

export default Header;
