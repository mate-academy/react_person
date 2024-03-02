import React from 'react';
import './App.scss';
import { Person } from './components/Person/Person';
import { people } from './components/People/People';

export const App = () => (
  <div className="App">
    <Person person={people.misha} />
    <Person person={people.olya} />
    <Person person={people.alex} />
  </div>
);
