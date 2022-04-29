import React from 'react';
import './App.scss';

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
      <h2 className="Person__name">
        My name is
        {' '}
        {misha.name}
      </h2>
      <p className="Person__age">
        I am
        {' '}
        {misha.age}
      </p>
      <p className="Person__partner">
        My wife&apos;s name is
        {' '}
        {misha.partnerName}
      </p>
    </section>

    <section className="Person">
      <h2 className="Person__name">
        My name is
        {' '}
        {olya.name}
      </h2>
      <p className="Person__partner">
        My husband&apos;s name is
        {' '}
        {olya.partnerName}
      </p>
    </section>

    <section className="Person">
      <h2 className="Person__name">
        My name is
        {' '}
        {alex.name}
      </h2>
      <p className="Person__age">
        I am
        {' '}
        {alex.age}
      </p>
      <p className="Person__partner">I am not married</p>
    </section>
  </div>
);

export default App;
