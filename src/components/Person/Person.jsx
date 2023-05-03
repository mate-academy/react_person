import React from 'react';

export function Person({ person }) {
  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>
      {person.age ? (
        <p className="Person__age">
          {`I am ${person.age}`}
        </p>
      ) : (null)
      }
      <p className="Person__partner">
        {person.isMarried ? `${person.partnerName} is ${person.sex === 'f' ? 'my husband' : 'my wife'}` : `I am not married`}
      </p>
    </section>
  );
}
