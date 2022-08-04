// export function Person({ person }) {}
import React from 'react';

export const Person = ({ person }) => {
  const pers = person.sex === 'm'
    ? "wife's"
    : "husband's";

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is
        {' '}
        {person.name}
      </h2>

      {person.age && (
        <p className="Person__age">
          I am
          {' '}
          {person.age}
        </p>
      )}

      {person.isMarried
        ? `My ${pers} name is ${person.partnerName}`
        : 'I am not married'
      }
    </section>
  );
};
