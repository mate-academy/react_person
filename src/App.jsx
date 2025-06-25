import React from 'react';
import { Person } from './components/Person/Person';
import './App.scss';
import { misha } from './data/misha';
import { olya } from './data/olya';
import { alex } from './data/alex';

export const App = () => (
  <div className="App">
    <Person person={misha} />
    <Person person={olya} />
    <Person person={alex} />
  </div>
);
