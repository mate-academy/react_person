import React from 'react';

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">
      My name is
      {' '}
      {person.name}
    </h2>
    <p className="Person__age">{person.age && `I am ${person.age}`}</p>
    {person.sex === 'm'
      ? (<p className="Person__partner">{person.isMarried ? `${person.partnerName} is my wife` : 'I am not married'}</p>)
      : (<p className="Person__partner">{person.isMarried ? `${person.partnerName} is my husband` : 'I am not married'}</p>)}
  </section>
);

export default Person;
