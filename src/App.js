import React from 'react';
import './App.scss';
import { Person } from './Person/Person';

const misha = {
  name: 'Misha',
  age: 37,
  sex: 'm',
  isMarried: true,
  partnerName: 'Natasha',
};

const olya = {
  name: 'Olya',
  sex: 'f',
  isMarried: true,
  partnerName: 'Maksym',
};

const alex = {
  name: 'Alex',
  age: 25,
  sex: 'm',
  isMarried: false,
};

export function App() {
  return (
    <>
      <Person person={misha} />
      <Person person={olya} />
      <Person person={alex} />
    </>
  );
}
