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
    <Person
      name={misha.name}
      age={misha.age}
      sex={misha.sex}
      isMarried={misha.isMarried}
      partnerName={misha.partnerName}
    />
    <Person
      name={olya.name}
      age={olya.age}
      sex={olya.sex}
      isMarried={olya.isMarried}
      partnerName={olya.partnerName}
    />
    <Person
      name={alex.name}
      age={alex.age}
      sex={alex.sex}
      isMarried={alex.isMarried}
      partnerName={alex.partnerName}
    />
  </div>
);
