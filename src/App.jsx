import React from 'react';
import { v4 as getRandomKey } from 'uuid';
import { Person } from './components/Person/Person';

import './App.scss';

export const misha = {
  name: 'Misha',
  age: 37,
  sex: 'm',
  isMarried: true,
  partnerName: 'Natasha',
};

export const olya = {
  name: 'Olya',
  sex: 'f',
  isMarried: true,
  partnerName: 'Maksym',
};

export const alex = {
  name: 'Alex',
  age: 25,
  sex: 'm',
  isMarried: false,
};

const people = [
  misha,
  olya,
  alex,
];

export const App = () => (
  <div className="App">
    {people.map(person => <Person key={getRandomKey()} person={person} />)}
  </div>
);
