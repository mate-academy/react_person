import React from 'react';
import './App.scss';
import { misha, olya, alex } from './components/ListOfPerson';
import { Person } from './components/Person';

export const App = () => (
  <div className="App">
    <Person {...misha} />
    <Person {...olya} />
    <Person {...alex} />
  </div>
);
