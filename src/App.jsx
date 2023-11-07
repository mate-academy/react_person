import React from 'react';
import './App.scss';
import { people } from './components/People/People';
import { Person } from './components/Person/Person';

export const App = () => (
  <div className="App">
    <Person person={people.misha} />

    <Person person={people.olya} />

    <Person person={people.alex} />
  </div>
);
