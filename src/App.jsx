import React from 'react';
import './App.scss';
import { Person } from './components/Person/Person';
import { misha } from './components/Person/People/Misha';
import { olya } from './components/Person/People/Olya';
import { alex } from './components/Person/People/Alex';

export const App = () => (
  <div className="App">
    <Person person={misha} />
    <Person person={olya} />
    <Person person={alex} />
  </div>
);
