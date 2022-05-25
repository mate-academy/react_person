/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './Person.scss';

export function Person({ person }) {
  const personPartner = person.sex === 'f'
    ? 'husband' : 'wife';

  return (
    <section className="Person">
      <>
        <h2 className="Person__name">
          {`My name is ${person.name}`}
        </h2>
        <p className="Person__age">
          { person.age && `I am ${person.age}` }
        </p>
        <p className="Person__partner">
          {person.isMarried ? `My ${personPartner}'s name is ${person.partnerName}`
            : 'I am not married'}
        </p>
      </>
    </section>
  );
}
