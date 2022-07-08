import React from 'react';
import './App.scss';
import { Person } from './components/Person/Person';

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
      <h2 className="Person__name">My name is Misha</h2>
      <p className="Person__age">I am 37</p>
      <p className="Person__partner">My wife&apos;s name is Natasha</p>
    </section>
    <Person
      name={misha.name}
      age={misha.age}
      sex={misha.sex}
      isMarried={misha.isMarried}
      partnerName={misha.partnerName}
    />

    <section className="Person">
      <h2 className="Person__name">My name is Olya</h2>
      <p className="Person__partner">My husband&apos;s name is Maksym</p>
    </section>
    <Person
      name={olya.name}
      age={olya.age}
      sex={olya.sex}
      isMarried={olya.isMarried}
      partnerName={olya.partnerName}
    />

    <section className="Person">
      <h2 className="Person__name">My name is Alex</h2>
      <p className="Person__age">I am 25</p>
      <p className="Person__partner">I am not married</p>
    </section>
    <Person
      name={alex.name}
      age={alex.age}
      sex={alex.sex}
      isMarried={alex.isMarried}
      partnerName={alex.partnerName}
    />
  </div>
);

export default App;
