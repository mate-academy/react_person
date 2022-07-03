/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import {
  Person,
  misha,
  olya,
  alex,
} from './components/Person';

const App = () => (
  <div className="App">
    <Person {...misha} />
    <Person {...olya} />
    <Person {...alex} />
  </div>
);

export default App;
