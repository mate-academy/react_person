import React from 'react';
import './App.scss';
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

const App = () => (
  <div className="App">
    <section className="Person">
      <Person
        {...misha}
      />
    </section>

    <section className="Person">
      <Person
        {...olya}
      />
    </section>

    <section className="Person">
      <Person
        {...alex}
      />
    </section>
  </div>
);

export default App;
