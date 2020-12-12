import React, { Component } from 'react';
import Next from '../Next/Next';

export default class Header extends Component {
  render() {
    return (
      <header id="header" className="flex">
        <div className="flex">
          <h1 className="text">
            hi. my name is <span className="name">jason stankevich</span>
            <br />
            i'm a full-stack web developer
          </h1>
        </div>
        <Next direction="down" to="#about" />
      </header>
    );
  }
}
