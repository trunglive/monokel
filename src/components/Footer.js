import React, { Component } from 'react';

const Footer = () => (
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
    <div className="author">
      <p>
        Code by{' '}
        <a href="https://github.com/trunglive" target="_blank">
          Trung Vo
        </a>
      </p>
      <p>
        Designed by{' '}
        <a
          href="https://dribbble.com/shots/4177962-Find-fancy-home-abroad/attachments/954897"
          target="_blank"
        >
          Olga Radzikowna
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;