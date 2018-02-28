import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer">
          <div className="footer__logo">Monokel</div>
          <div className="footer__nav">
            <div className="footer__nav--account">
              Your account
            </div>
            <div className="footer__nav--help">
              Help
            </div>
            <div className="footer__nav--social">
              <span>FB</span>
              <span>IG</span>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;