import React from 'react';

export const Person = ({ person }) => {
  const personPartner = !person.sex === 'm'
    ? `${person.partnerName} is my wife`
    : `${person.partnerName} is my husband`;

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is
        {' '}
        {person.name}
      </h2>

      <p className="Person__age">
        {person.age && `I am ${person.age}`}
      </p>

      <p className="Person__partner">
        {person.isMarried ? personPartner : 'I am not married'}
      </p>
    </section>
  );
};
