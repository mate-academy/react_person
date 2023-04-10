import React from 'react';
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

export const peoples = [misha, olya, alex];

export const App = () => (
  <div className="App">
    {peoples.map(people => <Person person={people} />)}
  </div>
);
