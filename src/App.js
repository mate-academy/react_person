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
    <section className="person">
      <h2 className="person__name">My name is Misha</h2>
      <p className="person__age">I am 37</p>
      <p className="person__partner">My wife&apos;s name is Natasha</p>
    </section>

    <section className="person">
      <h2 className="person__name">My name is Olya</h2>
      <p className="person__partner">My husband&apos;s name is Maksym</p>
    </section>

    <section className="person">
      <h2 className="person__name">My name is Alex</h2>
      <p className="person__age">I am 25</p>
      <p className="person__partner">I am not married</p>
    </section>

    <Person {...misha} />
    <Person {...olya} />
    <Person {...alex} />
  </div>
);

export default App;
