import React from 'react';
import './Person.scss';

export const Person = ({ person }) => {
  let parthnerPhrase = `wife's`;
  let marriedTag = (
    <p className="Person__partner">I am not married</p>
  );

  if (person.sex === 'f') {
    parthnerPhrase = `husband's`;
  }

  if (person.isMarried) {
    marriedTag = (
      <p className="Person__partner">
        {`My ${parthnerPhrase} name is ${person.partnerName}`}
      </p>
    );
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {person.age && (
        <p className="Person__age">{`I am ${person.age}`}</p>
      )}
      {marriedTag}
    </section>
  );
};
