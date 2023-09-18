import React from 'react';
import './App.scss';
import { Person } from './components/Person/Person';
import { misha, olya, alex } from './people';

export const App = () => (
  <div className="App">
    <Person person={misha} />
    <Person person={olya} />
    <Person person={alex} />
  </div>
);
