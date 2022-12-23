import React from 'react';
import { Person } from '../Person';
import './App.scss';

const Misha = {
  name: 'Misha',
  age: 37,
  sex: 'm',
  isMarried: true,
  partnerName: 'Natasha',
};

const Olya = {
  name: 'Olya',
  sex: 'f',
  isMarried: true,
  partnerName: 'Maksym',
};

const Alex = {
  name: 'Alex',
  age: 25,
  sex: 'm',
};

export const App = () => (
  <div className="App">
    <Person person={Misha} />
    <Person person={Olya} />
    <Person person={Alex} />
  </div>
);
