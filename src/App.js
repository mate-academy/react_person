import React from 'react';
import './App.scss';
import { Person } from './components/Person/Person';

// eslint-disable-next-line no-unused-vars
const misha = {
  name: 'Misha',
  age: 37,
  sex: 'm',
  isMarried: true,
  partnerName: 'Natasha',
};

// eslint-disable-next-line no-unused-vars
const olya = {
  name: 'Olya',
  sex: 'f',
  isMarried: true,
  partnerName: 'Maksym',
};

// eslint-disable-next-line no-unused-vars
const alex = {
  name: 'Alex',
  age: 25,
  sex: 'm',
  isMarried: false,
};

const App = () => (
  <div className="App">
    <section className="Person">
      <Person person={misha} />
    </section>

    <section className="Person">
      <Person person={olya} />
    </section>

    <section className="Person">
      <Person person={alex} />
    </section>
  </div>
);

export default App;
