import React from 'react';
import { Person } from './components/index';

import './App.scss';

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
      partner={misha.partnerName}
    />

    <Person
      name={olya.name}
      partner={olya.partnerName}
      sex={olya.sex}
    />
    <Person
      name={alex.name}
      age={alex.age}
      sex={alex.sex}
      partner={alex.partnerName}
    />
  </div>
);

export default App;
