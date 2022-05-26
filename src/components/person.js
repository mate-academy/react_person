import React from 'react';
import './person.scss';

export const Person = ({ person }) => {
  const partner = person.sex === 'f' ? 'husband' : 'wife';

  return (
    <section className="Person">
      <h2 className="Person__name">{person.name ? `My name is ${person.name}` : 'Аnonymous'}</h2>
      <p className="Person__age">{person.age && `I am ${person.age}`}</p>
      <p className="Person__partner">{person.isMarried ? `My ${partner}'s name is ${person.partnerName}` : 'I am not married'}</p>
    </section>
  );
};
