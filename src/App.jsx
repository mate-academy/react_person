import React from 'react';
import { Person } from './components/Person';
import persons from './data/persons.json';
import './App.scss';

export const App = () => (
  <div className="App">
    {persons.map(human => (
      <Person person={human} />
    ))}
  </div>
);
