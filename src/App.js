import React from 'react';
import { Person } from './components/Person/Person';

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
    <Person {...misha} />
    <Person {...olya} />
    <Person {...alex} />
    {/* <section className="Person">
      <h2 className="Person__name">My name is Misha</h2>
      <p className="Person__age">I am 37</p>
      <p className="Person__partner">My wife&apos;s name is Natasha</p>
    </section>

    <section className="Person">
      <h2 className="Person__name">My name is Olya</h2>
      <p className="Person__partner">My husband&apos;s name is Maksym</p>
    </section>

    <section className="Person">
      <h2 className="Person__name">My name is Alex</h2>
      <p className="Person__age">I am 25</p>
      <p className="Person__partner">I am not married</p>
    </section> */}
  </div>
);

export default App;
