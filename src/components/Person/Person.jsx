import React from 'react';

export function Person({ person }) {
  const ifMarriedToAdd = person.sex === 'm'
    ? (`My wife's name is `)
    : (`My husband's name is `);

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>
      { person.age && (
        <p className="Person__age">
          {person.age && (`I am ${person.age}`)}
        </p>
      )
      }
      <p className="Person__partner">
        {person.isMarried
          ? (`${ifMarriedToAdd} ${person.partnerName}`)
          : ('I am not married')
        }
      </p>
    </section>
  );
}
