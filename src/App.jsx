import React from 'react';
import './App.scss';

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
      <h2 className="Person__name">My name is Misha</h2>
      <p className="Person__age">I am 37</p>
      <p className="Person__partner">Natasha is my wife</p>
    </section>

    <section className="Person">
      <h2 className="Person__name">My name is Olya</h2>
      <p className="Person__partner">Maksym is my husband</p>
    </section>

    <section className="Person">
      <h2 className="Person__name">My name is Alex</h2>
      <p className="Person__age">I am 25</p>
      <p className="Person__partner">I am not married</p>
    </section>
  </div>
);
