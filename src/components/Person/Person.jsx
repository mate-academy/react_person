import React from 'react';

export function Person({ person }) {
  const partnerRole = (person.sex === 'f') ? 'husband' : 'wife';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>

      {person.age && (
        <p className="Person__age">
          {`I am ${person.age}`}
        </p>
      )}

      <p className="Person__partner">
        {person.isMarried
          ? `My ${partnerRole}'s name is ${person.partnerName}`
          : 'I am not married'
        }
      </p>
    </section>
  );
}
