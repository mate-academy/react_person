import React from 'react';
import './App.scss';
import { Person } from './components/Person';

const persons = [
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
    {persons.map(personItem => (
      <Person person={personItem} />
    ))}
  </div>
);
