import React from 'react';
import './Person.scss';

const getStatus = (person) => {
  if (!person.isMarried) {
    return 'I am not married';
  }

  return `${person.partnerName} is my ${
    person.sex === 'm'
      ? 'wife'
      : 'husband'
  }`;
};

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">
      My name is {`${person.name}`}
    </h2>

    {person.age && (
    <p className="Person__age">
      I am {`${person.age}`}
    </p>
    )}

    <p className="Person__partner">{getStatus(person)}</p>
  </section>
);
