import React from 'react';

export const Person = ({ person }) => {
  const name = `My name is ${person.name}`;
  const age = `I am ${person.age}`;
  let partner = '';

  partner = person.sex === 'm' ? 'wife' : partner = 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">{name}</h2>
      {person.age && (
        <p className="Person__age">{age}</p>
      )}
      <p className="Person__partner">{!person.isMarried ? 'I am not married' : `${person.partnerName} is my ${partner}`}</p>
    </section>
  );
};
