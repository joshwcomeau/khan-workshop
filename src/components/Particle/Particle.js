// @flow
import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

import { Asterisk } from './shapes';

type Props = {
  angle: number,
  velocity: number,
  shape: 'asterisk',
};

const springSettings = {
  stiffness: 50,
  damping: 25,
};

class Particle extends Component {
  constructor(props) {
    super(props);

    const angleInRads = (props.angle * Math.PI) / 180;

    const yDistance = Math.sin(angleInRads) * props.velocity;
    const xDistance = Math.cos(angleInRads) * props.velocity;

    this.state = {
      xDistance,
      yDistance,
    };
  }

  render() {
    const { xDistance, yDistance } = this.state;

    return (
      <Motion
        defaultStyle={{ x: 0, y: 0 }}
        style={{
          x: spring(xDistance, springSettings),
          y: spring(yDistance, springSettings),
        }}
      >
        {interpolated => (
          <span
            style={{
              transform: `translate(${interpolated.x}px, ${interpolated.y}px)`,
            }}
          >
            <Asterisk />
          </span>
        )}
      </Motion>
    );
  }
}

export default Particle;
