import React from 'react';
import './App.scss';
import { GENDER_FEMALE_SYMBOL, GENDER_MALE_SYMBOL } from './constants';

import { Person } from './components/Person/Person';

export const misha = {
  name: 'Misha',
  age: 37,
  sex: GENDER_MALE_SYMBOL,
  isMarried: true,
  partnerName: 'Natasha',
};

export const olya = {
  name: 'Olya',
  sex: GENDER_FEMALE_SYMBOL,
  isMarried: true,
  partnerName: 'Maksym',
};

export const alex = {
  name: 'Alex',
  age: 25,
  sex: GENDER_MALE_SYMBOL,
  isMarried: false,
};

export const App = () => (
  <div className="App">
    <Person person={misha} />
    <Person person={olya} />
    <Person person={alex} />
  </div>
);
