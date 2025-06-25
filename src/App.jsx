import React from 'react';
import './App.scss';
import { Person } from './components/Person/Person';
import { misha, olya, alex } from './data';

export const App = () => (
  <div>
    <Person person={misha} />
    <Person person={olya} />
    <Person person={alex} />
  </div>
);
