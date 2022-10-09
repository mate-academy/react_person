import React from 'react';
import './App.scss';
import { Person } from './components/Person';

export const misha = {
  name: 'Misha',
  age: 37,
  sex: 'm',
  isMarried: true,
  partnerName: 'Natasha',

  get partnerSex() {
    if (this.sex === 'm') {
      return 'wife';
    }

    return 'husband';
  },
};

export const olya = {
  name: 'Olya',
  sex: 'f',
  isMarried: true,
  partnerName: 'Maksym',

  get partnerSex() {
    if (this.sex === 'm') {
      return 'wife';
    }

    return 'husband';
  },
};

export const alex = {
  name: 'Alex',
  age: 25,
  sex: 'm',
  isMarried: false,

  get partnerSex() {
    if (this.sex === 'm') {
      return 'wife';
    }

    return 'husband';
  },
};

export const App = () => (
  <div className="App">
    <Person {...misha} />
    <Person {...olya} />
    <Person {...alex} />
  </div>
);
