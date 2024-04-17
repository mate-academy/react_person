import React from 'react';
import './Person.scss';

export const Person = ({ person }) => (
  <div className="Person">
    <h2 className="Person__name">My name is {person.name}</h2>
    {person.age && person.age !== '' && (
      <p className="Person__age">I am {person.age}</p>
    )}
    <p className="Person__partner">
      {!person.isMarried
        ? 'I am not married'
        : `${person.partnerName} is my ${person.sex === 'm' ? 'wife' : 'husband'}`}
    </p>
  </div>
);
