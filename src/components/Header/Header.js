import React, { Component } from 'react';
import Next from '../Next/Next';

export default class Header extends Component {
  render() {
    return (
      <header id="header" className="flex">
        <div className="callme">
          <p className="callme-text">hi. my name is jason stankevich</p>
          <p className="callme-text">is jason stankevich. i'm a full</p>
          <p className="callme-text">nkevich. i'm a full-stack devel</p>
          <p className="callme-text"> a full-stack developer. hi. my</p>
          <p className="callme-text">k developer. hi. my name is jas</p>
          <p className="callme-text"> hi. my name is jason stankevic</p>
          <p className="callme-text"> hi. my name is jason stankevic</p>
        </div>
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
