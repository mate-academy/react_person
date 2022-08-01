// export function Person({ person }) {}
import React from 'react';
import './Person.scss';

export const Person = ({ person }) => (
  <>
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>
    {person.age && (
      <p className="Person__age">{`I am ${person.age}`}</p>
    )}

    <p className="Person__partner">
      {person.isMarried === true && person.sex === 'm'
        ? `My wife's name is ${person.partnerName}`
        : 'I am not married'}
    </p>

    <p className="Person__partner">
      {person.isMarried === true && person.sex === 'f'
        ? `My husband's name is ${person.partnerName}`
        : 'I am not married'}
    </p>
  </>
);
