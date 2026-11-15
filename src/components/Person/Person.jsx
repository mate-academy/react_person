import React from 'react';

export const Person = ({ person }) => {
  const partnerRole = person.sex === 'm' ? 'wife' : 'husband';

  const partnerText = person.isMarried
    ? `${person.partnerName} is my ${partnerRole}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>

      {person.age !== undefined && (
        <p className="Person__age">{`I am ${person.age}`}</p>
      )}

      <p className="Person__partner">{partnerText}</p>
    </section>
  );
};
