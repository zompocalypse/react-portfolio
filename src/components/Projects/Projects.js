import React, { Component } from 'react';
import Next from '../Next/Next';

export default class Projects extends Component {
  render() {
    return (
      <section id="projects">
        <h2 className="projects-title">projects</h2>
        <div className="header-bar"></div>
        <div className="projects-text">
          <div className="projects-row flex">
            <div className="projects-single">
              <p>Meeple Board Game Manager</p>
              <p>React, HTML, CSS, Node.js, Express, PostgreSQL</p>
            </div>
            <div className="projects-single">
              <p>Autolearn - Learn Dutch Phrases</p>
              <p>React, HTML, CSS, Node.js, Express, PostgreSQL</p>
            </div>
          </div>
          <div className="projects-row flex">
            <div className="projects-single">
              <p>Go Fish</p>
              <p>React, HTML, CSS, Node.js, Express, PostgreSQL, socket.io</p>
            </div>
            <div className="projects-single">
              <p>Genesee Country Inn Bed and Breakfast</p>
              <p>React, HTML, CSS, Node.js, Express, PostgreSQL</p>
            </div>
          </div>
        </div>
        <Next direction="down" to="#contact" />
      </section>
    );
  }
}
