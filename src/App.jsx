import React from 'react';
import { Person } from './components/Person/Person';
import { misha, olya, alex } from './userDB';

import './App.scss';

export const App = () => (
  <div className="App">
    <Person person={misha} />
    <Person person={olya} />
    <Person person={alex} />
  </div>
);
