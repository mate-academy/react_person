import React from 'react';
import './App.scss';
import { Person } from './Person';

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

const App = () => (
  <div className="App">

    <Person
      name={misha.name}
      age={misha.age}
      sex={misha.sex}
      partnerName={misha.partnerName}
      isMarried={misha.isMarried}
    />

    <Person
      name={olya.name}
      age={olya.age}
      sex={olya.sex}
      partnerName={olya.partnerName}
      isMarried={olya.isMarried}
    />

    <Person
      name={alex.name}
      age={alex.age}
      sex={alex.sex}
      partnerName={alex.partnerName}
      isMarried={alex.isMarried}
    />
  </div>
);

export default App;
