import React from 'react';
import './App.scss';

import { misha, olya, alex } from './constants/constants';

import { Person } from './components/Person';

export const App = () => (
  <div className="App">
    <Person person={misha} />
    <Person person={olya} />
    <Person person={alex} />
  </div>
);
