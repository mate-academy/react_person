import React from 'react';
import './App.scss';
import { Person, people } from './components/Person';

export const App = () => (
  <div className="App">
    <Person person={people.misha} />
    <Person person={people.olya} />
    <Person person={people.alex} />
  </div>
);
