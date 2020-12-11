import React, { Component } from 'react';
import images from '../../assets/images';
import Next from '../Next/Next';

export default class About extends Component {
  render() {
    return (
      <section id="about">
        <h2 className="about-title">about</h2>
        <div className="header-bar"></div>
        <div className="flex about-me">
          <div className="about-text">
            I am a full-stack web developer living in of Gainesville, Florida
            specializing in building wonderful websites, amazing applications,
            and anything in between. After spending 18 years in customer-facing
            roles and leading customer-facing teams, I developed a knack for:
            <ul className="about-list">
              <li>
                Understanding and being empathetic towards colleagues and
                customers
              </li>
              <li>Believing every customer matters</li>
              <li>Learning from every interaction</li>
            </ul>
          </div>
          <img
            className="me-image"
            src={images.me}
            alt="graffiti painting of Jason Stankevich"
          />
        </div>
        <Next direction="down" to="#projects" />
      </section>
    );
  }
}
