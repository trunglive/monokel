import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer">
          <div className="footer__logo">Monokel</div>
          <div className="footer__nav">
            <div className="footer__nav--account">Your account</div>
            <div className="footer__nav--help">Help</div>
            <div className="footer__nav--social">
              <i className="footer__nav--social-facebook ion-social-facebook" />

              <i className="footer__nav--social-instagram ion-social-instagram-outline" />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
