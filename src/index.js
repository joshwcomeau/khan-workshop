import React from 'react';
import ReactDOM from 'react-dom';

import Particle from './components/Particle';

const App = () => (
  <div
    style={{
      width: 500,
      height: 500,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Particle angle={280} velocity={100} spin={360}>
      <Particle.Asterisk />
    </Particle>
    <Particle angle={100} velocity={200}>
      <Particle.Circle />
    </Particle>
    <Particle angle={24} velocity={50} spin={-360}>
      <Particle.Diamond />
    </Particle>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
