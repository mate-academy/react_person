import React from 'react';
import './Person.scss';

export const Person = ({ person }) => {
  let parnterStatus = null;

  if (person.isMarried) {
    parnterStatus = person.sex === 'm' ? 'wife' : 'husband';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age ? <p className="Person__age">I am {person.age}</p> : ''}
      <p className="Person__partner">
        {person.isMarried
          ? `${person.partnerName} is my ${parnterStatus}`
          : 'I am not married'}
      </p>
    </section>
  );
};
