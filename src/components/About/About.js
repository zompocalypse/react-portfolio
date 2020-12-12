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
            I am a full-stack web developer living in Gainesville, Florida
            specializing in building wonderful websites, amazing applications,
            and anything in between. I have a passion for using CSS creatively,
            developing intuitive user experiences, and cleanly organized
            servers. After spending 18 years in customer-facing roles and
            leading customer-facing teams, I developed a knack for understanding
            and being empathetic towards colleagues and customers.
          </div>
          <div className="about-text">
            If you are looking for a well rounded developer with a myriad of
            qualifications,{' '}
            <a href="#contact" className="hit-me-up">
              hit me up
            </a>
            .
            <ul className="about-list">
              <li>
                React, CSS, HTML, Node.js, Express, PostgreSQL, Typescript
              </li>
              <li>Leadership, empathy, and creative problem solving</li>
              <li>Life-long learner, avid hiker, and book worm</li>
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
