import React from 'react';
import './App.scss';
import { Person } from './components/Person/Person';

export const people = [
  {
    name: 'Misha',
    age: 37,
    sex: 'm',
    isMarried: true,
    partnerName: 'Natasha',
  },
  {
    name: 'Olya',
    sex: 'f',
    isMarried: true,
    partnerName: 'Maksym',
  },
  {
    name: 'Alex',
    age: 25,
    sex: 'm',
    isMarried: false,
  },
];

export const App = () => (
  <div className="App">
    {people.map(person => <Person person={person} />)}
  </div>
);
