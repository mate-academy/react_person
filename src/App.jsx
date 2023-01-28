import React from 'react';
import './App.scss';
import { misha, olya, alex } from './Constants/Constants';
import { Person } from './components/Person';

export const App = () => (
  <div className="App">
    <Person person={misha} />
    <Person person={olya} />
    <Person person={alex} />
  </div>
);
