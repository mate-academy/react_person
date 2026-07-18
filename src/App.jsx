import React from 'react';
import './App.scss';
import { Person } from './components/Person/Person';

const misha = {
  name: 'Misha',
  age: 25,
  sex: 'm',
  isMarried: true,
  partner: { name: 'Olya' },
};
const olya = {
  name: 'Olya',
  age: 23,
  sex: 'f',
  isMarried: true,
  partner: { name: 'Misha' },
};
const alex = { name: 'Alex', sex: 'm', isMarried: false };

export function App() {
  return (
    <div className="App">
      <Person person={misha} />
      <Person person={olya} />
      <Person person={alex} />
    </div>
  );
}
