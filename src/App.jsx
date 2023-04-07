import React from 'react';
import { Person } from './components/Person';
import Persons from './data/persons.json';
import './App.scss';

export const App = () => (
  <div className="App">
    {Persons.map(person => (
      <Person person={person} />
    ))}
  </div>
);
