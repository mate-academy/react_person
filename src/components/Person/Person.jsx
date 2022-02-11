import React from 'react';
import './Person.scss';

export const Person = ({ person }) => {
  let parthnerPhrase = `wife's`;
  let marriedPhrase = 'I am not married';

  if (person.sex === 'f') {
    parthnerPhrase = `husband's`;
  }

  if (person.isMarried) {
    marriedPhrase
      = `My ${parthnerPhrase} name is ${person.partnerName}`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {person.age && (
        <p className="Person__age">{`I am ${person.age}`}</p>
      )}
      <p className="Person__partner">{marriedPhrase}</p>
    </section>
  );
};
