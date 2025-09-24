import React from 'react';
import './App.scss';
import { Person } from './components/Person/Person.jsx';

const misha = {
  name: 'Misha',
  sex: 'm',
  age: 25,
  isMarried: true,
  partner: 'Olya',
};

const olya = {
  name: 'Olya',
  sex: 'f',
  age: 22,
  isMarried: true,
  partner: 'Misha',
};

const alex = {
  name: 'Alex',
  sex: 'm',
  isMarried: false,
};

export const App = () => (
  <div>
    <Person person={misha} />
    <Person person={olya} />
    <Person person={alex} />
  </div>
);