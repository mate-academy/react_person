import React from 'react';
import './App.scss';
import { Person } from './components/Person/Person';

// eslint-disable-next-line
const misha = {
  name: 'Misha',
  age: 37,
  sex: 'm',
  isMarried: true,
  partnerName: 'Natasha',
};

// eslint-disable-next-line
const olya = {
  name: 'Olya',
  sex: 'f',
  isMarried: true,
  partnerName: 'Maksym',
};

// eslint-disable-next-line
const alex = {
  name: 'Alex',
  age: 25,
  sex: 'm',
  isMarried: false,
};

const App = () => (
  // eslint-disable-next-line
  <div className="App">
    <Person {...misha} />

    <Person {...olya} />

    <Person {...alex} />
  </div>
);

export default App;
