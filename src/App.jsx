import React from 'react';
import './App.scss';
import { Person } from './components/Person/Person';
import { Age } from './components/Age/Age';
import { Partner } from './components/Partner/Partner';

export const misha = {
  name: 'Misha',
  age: 37,
  sex: 'm',
  isMarried: true,
  partnerName: 'Natasha',
};

export const olya = {
  name: 'Olya',
  sex: 'f',
  isMarried: true,
  partnerName: 'Maksym',
};

export const alex = {
  name: 'Alex',
  age: 25,
  sex: 'm',
  isMarried: false,
};

export const App = () => (
  <div className="App">
    <section className="Person">
      <Person person="misha" />
      <Age age={37} />
      <Partner partner="Natasha" />
    </section>

    <section className="Person">
      <Person person="olya" />
      <Partner partner="Maksym" />
    </section>

    <section className="Person">
      <Person person="alex" />
      <Age age={25} />
    </section>
  </div>
);
