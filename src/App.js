import React from 'react';
import './App.scss';

import { Person } from './components/Person/Person';

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

const people = [misha, olya, alex];

const App = () => (
  <div className="App">
    {people.map(person => (
      <Person
        name={person.name}
        age={person.age}
        partnerName={person.partnerName}
        isMarried={person.isMarried}
        sex={person.sex}
      />
    ))}
  </div>
);

export default App;
