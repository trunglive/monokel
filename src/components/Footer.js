import React, { Component } from "react";

const Footer = () => (
  <footer>
    <div className="footer">
      <div className="footer__logo">Monokel</div>
      <div className="footer__nav">
        <div className="footer__nav--account">Your account</div>
        <div className="footer__nav--help">Help</div>
        <div className="footer__nav--social">
          <img
            className="footer__nav--social-facebook"
            src="icons/facebook.svg"
          />
          <img
            className="footer__nav--social-instagram"
            src="icons/instagram.svg"
          />
        </div>
      </div>
    </div>
    <div className="author">
      <p>
        <a
          href="https://dribbble.com/shots/4177962-Find-fancy-home-abroad/attachments/954897"
          target="_blank"
        >
          Designed by Olga Radzikowna
        </a>
      </p>
      <p>
        <a href="https://github.com/trunglive/monokel" target="_blank">
          Code by Trung Vo
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;

{
  /* <i className="footer__nav--social-facebook ion-social-facebook" /> */
}
{
  /* <i className="footer__nav--social-instagram ion-social-instagram-outline" /> */
}
