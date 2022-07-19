import React from 'react';

export function Person({ person }) {
  const partnerData
    = person.sex === 'm'
      ? `My wife& apos;s name is ${person.partnerName}`
      : `My husband& apos;s name is ${person.partnerName}`;

  return (
    <section className="Person">
      <h2 className="Person__name">{person.name}</h2>
      {person.age ? (
        <p className="Person__age">
          I am
          {' '}
          {person.age}
        </p>
      ) : <p>{undefined}</p>
      }

      {person.isMarried ? (
        <p className="Person__partner">
          {partnerData}
        </p>
      ) : <p>I am not married</p>
      }
    </section>
  );
}
