import React from 'react';

import { Person } from './Person/Person';

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

const persons = [misha, olya, alex];

const App = () => (
  <div className="App">
    {persons.map(person => (
      <Person
        name={person.name}
        age={person.age}
        isMarried={person.isMarried}
        partnerName={person.partnerName}
        sex={person.sex}
      />
    ))}
  </div>
);

export default App;
