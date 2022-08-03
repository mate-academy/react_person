import React from 'react';

export function Person({ person }) {
  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>

      <p className="Person__age">
        {person.age && (`I am ${person.age}`)}
      </p>

      <p className="Person__partner">
        {person.isMarried
          ? `My ${person.sex === 'm'
            ? 'wife'
            : 'husband'
          }'s name is ${person.partnerName}`
          : 'I am not married'
        }
      </p>
    </section>
  );
}
