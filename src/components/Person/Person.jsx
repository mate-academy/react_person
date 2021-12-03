import React from 'react';
import './Person.scss';

export const Person = ({ name, age, partner, isMarried, sex }) => (
  <div className="App">
    <section className="Person">
      <h2 className="Person__name">
        My name is
        {name}
      </h2>
      <p className="Person__age">
        {age && `I am ${age}`}
      </p>
      <p className="Person__partner">
        {(isMarried && sex === 'm') && `My wife's name is ${partner}`}
        {(isMarried && sex === 'f') && `My husband's name is ${partner}`}
        {isMarried === false && `I am not married`}
      </p>
    </section>
  </div>
);
