import React from 'react';
import './Person.scss';

export function Person({ person }) {
  return (
    <section className="Person">
      <h2 className="Person__name">
        {person.name}
      </h2>

      <p className="Person__age">
        {person.age || null}
      </p>

      <p className="Person__partner">
        {person.isMarried ? person.partnerName : null}
      </p>
    </section>
  );
}
