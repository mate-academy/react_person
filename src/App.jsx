import React from 'react';
import './App.scss';
import { Person } from './components/Person/Person';

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

export const App = () => (
  <div className="App">
    <Person name={misha.name} age={misha.age} partnerName={misha.partnerName} />
    <Person
      name={olya.name}
      age={olya.age !== undefined ? olya.age : 100}
      partnerName={olya.partnerName}
    />
    <Person name={alex.name} age={alex.age} partnerName={alex.partnerName} />
  </div>
);
