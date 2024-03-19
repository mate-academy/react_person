import React from 'react';

export function Person({ person }) {
  const gender = person.sex === 'f' ? 'husband' : 'wife';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age ? <p className="Person__age">I am {person.age}</p> : null}
      <p className="Person__partner">
        {person.isMarried
          ? `${person.partnerName} is my ${gender}`
          : 'I am not married'}
      </p>
    </section>
  );
}
