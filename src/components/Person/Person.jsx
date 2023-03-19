/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-nested-ternary */
import React from 'react';

export const Person = ({ person }) => (
  <div className="App">
    <section className="Person">
      <h2 className="Person__name">
        My name is {person.name}
      </h2>
      {person.age
      && <p className="Person__age">I am {person.age}</p>}
      <p className="Person__partner">
        {person.isMarried
          ? (person.sex === 'f' ? `${person.partnerName} is my husband`
            : `${person.partnerName} is my wife`)
          : `I am not married`
        }
      </p>
    </section>
  </div>
);
