/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Person from './components/Person';

// eslint-disable-next-line
const misha = {
  name: 'Misha',
  age: 37,
  sex: 'm',
  isMarried: true,
  partnerName: 'Natasha',
};

// eslint-disable-next-line
const olya = {
  name: 'Olya',
  sex: 'f',
  isMarried: true,
  partnerName: 'Maksym',
};

// eslint-disable-next-line
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
      age={olya.age}
      partnerName={olya.partnerName}
      sex={olya.sex}
      isMarried={olya.isMarried}
    />

    <Person
      name={alex.name}
      age={alex.age}
      partnerName={alex.partnerName}
      sex={alex.sex}
      isMarried={alex.isMarried}
    />
  </div>
);

export default App;
