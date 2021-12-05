import React from 'react';
import { Person } from './components/Person';

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

const obj = misha;

const App = () => (
  <Person
    name={obj.name}
    age={obj.age}
    sex={obj.sex}
    isMarried={obj.isMarried}
    partnerName={obj.partnerName}
  />
);

export default App;
