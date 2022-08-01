// export function Person({ person }) {}
import React from 'react';

export function Person({ person }) {
  let partner = '';

  if (person.sex === 'm') {
    partner = `wife's`;
  } else {
    partner = `husband's`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>

      <p className="Person__age">
        {person.age
          ? `I am ${person.age}`
          : null}
      </p>

      <p className="Person__partner">
        {person.isMarried === true
          ? `My ${partner} name is ${person.partnerName}`
          : 'I am not married'}
      </p>
    </section>
  );
}
