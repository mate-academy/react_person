import React from 'react';

const gender = (sex) => {
  if (sex === 'm') {
    return 'wife';
  }

  return 'husband';
};

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>
    {person.age ? (
      <p className="Person__age">{`I am ${person.age}`}</p>
    ) : ('')}
    {person.isMarried ? (
      <p className="Person__partner">
        {`${person.partnerName} is my `}
        {gender(person.sex)}
      </p>
    ) : (
      <p className="Person__partner">I am not married</p>
    )}
  </section>
);
