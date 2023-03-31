import React from 'react';

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>

    {person.age
      ? <p className="Person__age">{`I am ${person.age}`}</p>
      : null}

    <p className="Person__partner">
      {!person.isMarried ? `I am not married` : null}

      {person.isMarried && person.sex === 'm'
        ? `${person.partnerName} is my wife`
        : null}

      {person.isMarried && person.sex === 'f'
        ? `${person.partnerName} is my husband`
        : null}
    </p>
  </section>
);
