import React from 'react';

export function Person({ person }) {
  const isPartner = person.sex === 'm' ? `${person.partnerName} is my wife` : `${person.partnerName} is my husband`;
  const partner = person.isMarried ? isPartner : 'I am not married';

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
      <p className="Person__partner">{partner}</p>
    </section>
  );
}
