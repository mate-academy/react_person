import React from 'react';
import './App.scss';
import { Person } from './components/Person/Person';
import * as People from './People';

export const App = () => (
  <div className="App">
    <Person person={People.misha} />
    <Person person={People.olya} />
    <Person person={People.alex} />
  </div>
);
