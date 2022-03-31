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
      personsArray.map(e => (
        <Person
          name={e.name}
          age={e.age}
          sex={e.sex}
          isMarried={e.isMarried}
          partnerName={e.partnerName}
        />
      ))
    }
    </div>
  );
};

export default App;
