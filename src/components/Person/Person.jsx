// export function Person({ person }) {}
import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const partner = sex === 'm'
    ? "wife's"
    : "husband's";

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is
        {' '}
        {name}
      </h2>

      {person.age && (
        <p className="Person__age">
          I am
          {' '}
          {age}
        </p>
      )}

      {isMarried
        ? `My ${partner} name is ${partnerName}`
        : 'I am not married'
      }
    </section>
  );
};
