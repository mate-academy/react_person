import React from 'react';

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${person.name}`}
    </h2>

    <p className="Person__age">
      {person.age ? `I am ${person.age}` : true}
    </p>

    <p>
      {person.partnerName ? `${person.partnerName} is my ${person.sex === 'f' ? 'husband' : 'wife'}` : 'I am not married'}
    </p>
  </section>
);
