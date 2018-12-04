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
    <Particle angle={280} velocity={100} />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
