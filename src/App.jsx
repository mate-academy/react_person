import React from 'react';
import { Person } from './Person';

const misha = {
  name: 'Misha',
  age: 30,
  sex: 'm',
  isMarried: true,
  partnerName: 'Tanya'
};

const olya = {
  name: 'Olya',
  age: 25,
  sex: 'f',
  isMarried: true,
  partnerName: 'Vlad'
};

const alex = {
  name: 'Alex',
  sex: 'm',
  isMarried: false
};

export const App = () => (
  <>
    <Person person={misha} />
    <Person person={olya} />
    <Person person={alex} />
  </>
);

