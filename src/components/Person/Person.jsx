import React from 'react';
import './Person.scss';

export const Person = ({ person }) => {
  let married = 'I am not married';

  if (person.isMarried) {
    if (person.sex === 'm') {
      married = `${person.partnerName} is my wife`;
    } else {
      married = `${person.partnerName} is my husband`;
    }
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age > 0 && <p className="Person__age">I am {person.age}</p>}
      <p className="Person__partner">{married}</p>
    </section>
  );
};
