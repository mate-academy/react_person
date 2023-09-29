import React from 'react';

const STATUSES = {
  m: 'wife',
  f: 'husband',
};

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>

    { !person.age ? null : (<p className="Person__age">{`I am ${person.age}`}</p>)}

    <p className="Person__partner">
      {
        !person.isMarried
          ? 'I am not married'
          : `${person.partnerName} is my ${STATUSES[person.sex]}`
      }
    </p>
  </section>
);
