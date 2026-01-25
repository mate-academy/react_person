import React from 'react';
import './App.scss';
import { misha, olya, alex } from './components/Person/Person';

export const App = () => (
  <div className="App">
    <section className="Person">
      <h2 className="Person__name">My name is {misha.name}</h2>
      <p className="Person__age">I am {misha.age}</p>
      <p className="Person__partner"> I am married to {misha.partnerName}</p>
    </section>

    <section className="Person">
      <h2 className="Person__name">My name is {olya.name}</h2>
      <p className="Person__partner">{olya.partnerName} is my husband</p>
    </section>

    <section className="Person">
      <h2 className="Person__name">My name is {alex.name}</h2>
      <p className="Person__age">I am {alex.age}</p>
      <p className="Person__partner">I am not married</p>
    </section>
  </div>
);
