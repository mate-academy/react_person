import React from 'react';
import { Person } from './Person';

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
  <div className="App">
    <Person
      user={misha}
    />

    <Person
      user={olya}
    />

    <Person
      user={alex}
    />
  </div>
);

export default App;
