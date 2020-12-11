import React, { Component } from 'react';
import images from '../../assets/images';
import Next from '../Next/Next';

export default class Projects extends Component {
  render() {
    return (
      <section id="projects">
        <h2 className="projects-title">projects</h2>
        <div className="header-bar"></div>
        <div className="projects-all">
          <div className="projects-row flex">
            <div className="projects-single">
              <img src={images.bg_wall} alt="A wall of colorful boardgames" />
              <div className="single-title">
                <p>Meeple Board Game Manager</p>
                <p>React, HTML, CSS, Node.js, Express, PostgreSQL</p>
              </div>
              <div className="single-links">
                <a
                  href="https://meeple.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  demo
                </a>
                <a
                  href="https://github.com/zompocalypse/meeple-server"
                  target="_blank"
                  rel="noreferrer"
                >
                  server repo
                </a>
                <a
                  href="https://github.com/zompocalypse/meeple-client"
                  target="_blank"
                  rel="noreferrer"
                >
                  client repo
                </a>
              </div>
            </div>
            <div className="projects-single">
              <img src={images.autolearn} alt="screenshot of Autolearn App" />
              <div className="single-title">
                <p>Autolearn - Learn Dutch Phrases</p>
                <p>React, HTML, CSS, Node.js, Express, PostgreSQL</p>
              </div>
              <div className="single-links">
                <a
                  href="https://spaced-repetition-swart.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  demo
                </a>
                <a
                  href="https://github.com/zompocalypse/spaced-repetition-api"
                  target="_blank"
                  rel="noreferrer"
                >
                  server repo
                </a>
                <a
                  href="https://github.com/zompocalypse/spaced-repetition"
                  target="_blank"
                  rel="noreferrer"
                >
                  client repo
                </a>
              </div>
            </div>
          </div>
          <div className="projects-row flex">
            <div className="projects-single">
              <img src={images.gofish} alt="screenshot of Autolearn App" />
              <div className="single-title">
                <p>Go Fish</p>
                <p>React, HTML, CSS, Node.js, Express, PostgreSQL, socket.io</p>
              </div>
              <div className="single-links">
                <a
                  href="https://gofish-team2.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  demo
                </a>
                <a
                  href="https://github.com/zompocalypse/go-fish-server"
                  target="_blank"
                  rel="noreferrer"
                >
                  server repo
                </a>
                <a
                  href="https://github.com/zompocalypse/go-fish-client"
                  target="_blank"
                  rel="noreferrer"
                >
                  client repo
                </a>
              </div>
            </div>
            <div className="projects-single">
              <img
                src={images.soon}
                alt="a horse looking through a third story window"
              />
              <div className="single-title">
                <p>Soon...</p>
              </div>
              <div className="single-links">
                <p>n/a</p>
                <p>n/a</p>
              </div>
            </div>
          </div>
        </div>
        <Next direction="down" to="#contact" />
      </section>
    );
  }
}
