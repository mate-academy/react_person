import React from 'react';
import { Person } from './components/Person';
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
      partnerName={misha.partnerName}
      sex={misha.sex}
      isMarried={misha.isMarried}
    />

    <Person
      name={olya.name}
      partnerName={olya.partnerName}
      sex={olya.sex}
      isMarried={olya.isMarried}
    />

    <Person
      name={alex.name}
      age={alex.age}
      sex={alex.sex}
      isMarried={alex.isMarried}
    />
  </div>
);

export default App;
