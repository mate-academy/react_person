import React from 'react';
import { Person } from './components/Person/Person';
import './App.scss';

const misha = {
  name: 'Misha',
  sex: 'm',
  isMarried: true,
  partnerName: 'Olya',
  age: 33,
};

const olya = {
  name: 'Olya',
  sex: 'f',
  isMarried: true,
  partnerName: 'Misha',
  age: 28,
};

const alex = {
  name: 'Alex',
  sex: 'm',
  isMarried: false,
};

export const App = () => (
  <div className="App">
    <h1>People</h1>
    <Person person={misha} />
    <Person person={olya} />
    <Person person={alex} />
  </div>
);
