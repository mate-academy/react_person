import React from 'react';
import './App.scss';

import Person from './components/Person';

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
      partner={misha.partnerName}
      isMarried={misha.isMarried}
      sex={misha.sex}
    />
    <Person
      name={olya.name}
      age={olya.age}
      partner={olya.partnerName}
      isMarried={olya.isMarried}
      sex={olya.sex}
    />
    <Person
      name={alex.name}
      age={alex.age}
      partner={alex.partnerName}
      isMarried={alex.isMarried}
      sex={alex.sex}
    />
  </div>
);

export default App;
