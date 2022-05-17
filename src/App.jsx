import React from 'react';
import { Person } from './Person';
import { misha, olya, alex } from './data';
import './App.scss';

export const App = () => (
  <div className="App">
    <Person {...misha} />
    <Person {...olya} />
    <Person {...alex} />
  </div>
);
