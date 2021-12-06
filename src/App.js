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

const people = [misha, olya, alex];

const App = () => (
  <div className="App">
    {people.map(({ name, age, sex, isMarried, partnerName }) => (
      <Person
        name={name}
        age={age}
        sex={sex}
        isMarried={isMarried}
        partnerName={partnerName}
      />
    ))}
  </div>
);

export default App;
