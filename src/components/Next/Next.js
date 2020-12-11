import React, { Component } from 'react';
import { Icon } from '@mdi/react';
import { mdiArrowDownBold, mdiArrowUpBold } from '@mdi/js';
import { HashLink as Link } from 'react-router-hash-link';

export default class Next extends Component {
  static defaultProps = {
    to: '',
    direction: 'down',
  };
  render() {
    return (
      <Link smooth to={this.props.to} aria-label="scroll down">
        <button className="chevron-btn">
          <div className="chevron-btn-wrapper">
            <div className="chevron-btn-circle"></div>
            <div className="chevron-btn-circleShadow chevron-btn-circleShadow-c1"></div>
            <div className="chevron-btn-circleShadow chevron-btn-circleShadow-c2"></div>
            <div className="chevron-btn-circleShadow chevron-btn-circleShadow-c3"></div>
            <div className="chevron-btn-label">
              {this.props.direction === 'down' ? (
                <Icon path={mdiArrowDownBold} size={1} />
              ) : (
                <Icon path={mdiArrowUpBold} size={1} />
              )}
            </div>
          </div>
        </button>
      </Link>
    );
  }
}
