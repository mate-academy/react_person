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

const people = [misha, olya, alex];

const App = () => (
  <div className="App">
    {people.map(person => (
      <Person
        name={person.name}
        sex={person.sex}
        age={person.age}
        isMarried={person.isMarried}
        partnerName={person.partnerName}
      />
    ))}
  </div>
);

export default App;
