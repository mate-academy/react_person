import React from 'react';
import './Person.scss';

export function Person({ person }) {
  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>

      <p className="Person__age">
        {`I am ${person.age || null}`}
      </p>

      <p className="Person__partner">
        {person.isMarried ? `My hasbands name is ${person.partnerName}` : `I am not married`}
      </p>
    </section>
  );
}
