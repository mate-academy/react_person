import React from 'react';

function createPartnerString(sex, partnerName) {
  if (sex === 'f') {
    return `${partnerName} is my husband`;
  }

  return `${partnerName} is my wife`;
}

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>

    {person.age && (
      <p className="Person__age">{`I am ${person.age}`}</p>
    )}

    {person.isMarried ? (
      <p className="Person__partner">
        {createPartnerString(person.sex, person.partnerName)}
      </p>
    ) : (
      <p className="Person__partner">
        I am not married
      </p>
    )}
  </section>
);
