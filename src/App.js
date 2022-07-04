import React from 'react';
import './components/Person.scss';
import { Person } from './components/Person.jsx';

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
    <section className="Person">
      <Person
        namE={misha.name}
        age={misha.age}
        partner={misha.partnerName}
        sex={misha.sex}
      />
    </section>
    <section className="Person">
      <Person
        namE={olya.name}
        age={olya.age}
        partner={olya.partnerName}
        sex={olya.sex}
      />
    </section>

    <section className="Person">
      <Person
        namE={alex.name}
        age={alex.age}
        partner={alex.partnerName}
        sex={alex.sex}
      />
    </section>
  </div>
);

export default App;
