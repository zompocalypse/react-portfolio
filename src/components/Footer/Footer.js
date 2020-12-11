import React, { Component } from 'react';
import images from '../../assets/images';

export default class Header extends Component {
  render() {
    return (
      <section className="footer flex">
        <div className="flex-row icon-group">
          <a href="mailto:jason.stankevich@gmail.com">
            <img className="icons" src={images.email} alt="Email icon" />
          </a>
          <a
            href="https://github.com/zompocalypse"
            target="_blank"
            rel="noreferrer"
          >
            <img className="icons" src={images.github} alt="GitHub icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/jason-stankevich/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="icons" src={images.linkedin} alt="LinkedIn icon" />
          </a>
        </div>
        <p className="copy">&copy;2020 :: Jason Stankevich</p>
      </section>
    );
  }
}
