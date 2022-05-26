import React from 'react';
import './App.scss';
import Person from './Person';

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
      name={misha.name}
      age={misha.age}
      partner={misha.partnerName}
    />

    <Person
      name={olya.name}
      age={olya.age}
      partner={olya.partnerName}
    />

    <Person
      name={alex.name}
      age={alex.age}
      partner={alex.partnerName}
    />
  </div>
);

export default App;
