import React from 'react';
import Person from './Person';

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

const App = () => {
  const personsArray = [misha, olya, alex];

  return (
    <div>
      {
      personsArray.map(person => (
        <Person
          name={person.name}
          age={person.age}
          sex={person.sex}
          isMarried={person.isMarried}
          partnerName={person.partnerName}
        />
      ))
    }
    </div>
  );
};

export default App;
