import React from 'react';
import Person from './Components/Person/Person';

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
      sex={misha.sex}
      age={misha.age}
      isMarried={misha.isMarried}
      partnerName={misha.partnerName}
    />

    <Person
      name={olya.name}
      sex={olya.sex}
      age={olya.age}
      isMarried={olya.isMarried}
      partnerName={olya.partnerName}
    />

    <Person
      name={alex.name}
      sex={alex.sex}
      age={alex.age}
      isMarried={alex.isMarried}
      partnerName={alex.partnerName}
    />
  </div>
);

export default App;
