import React from 'react';

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">
      My name is
      {' '}
      {person.name}
    </h2>
    <p className="Person__age">
      {' '}
      {person.age === undefined ? '' : `I am ${person.age}`}
    </p>
    <p className="Person__partner">
      {person.partnerName}
      {' '}
      {(person.isMarried === true && person.sex === 'm') && (
        'is my wife'
      )}
      {(person.isMarried === true && person.sex === 'f') && (
        'is my husband'
      )}
      {(person.isMarried === false && person.sex === 'm') && (
        'I am not married'
      )}
    </p>
  </section>
);
