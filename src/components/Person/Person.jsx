import React from 'react';

export function Person({ person }) {
  const partner = person.sex === 'm'
    ? `My wife's name is ${person.partnerName}`
    : `My husband's name is ${person.partnerName}`;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>
      {person.age && <p className="Person__age">{`I am ${person.age}`}</p>}
      <p className="Person__partner">
        {person.isMarried ? (partner) : ('I am not married')}
      </p>
    </section>
  );
}
