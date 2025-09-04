import React from 'react';
import './App.scss';
import { Person } from './components/Person/Person';

const misha = {
  name: 'Misha',
  sex: 'm',
  age: 30,
  isMarried: true,
  partnerName: 'Olya',
};

const olya = {
  name: 'Olya',
  sex: 'f',
  isMarried: true,
  partnerName: 'Misha',
};

const alex = {
  name: 'Alex',
  sex: 'm',
  age: 25,
  isMarried: false,
};

export function App() {
  return (
    <main className="App">
      <Person person={misha} />
      <Person person={olya} />
      <Person person={alex} />
    </main>
  );
}
