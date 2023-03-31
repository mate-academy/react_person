import React from 'react';

export const Person = ({ person }) => {
  const partnerSex = person.sex === 'm'
    ? 'wife'
    : 'husband';

  const age = person.age
    ? <p className="Person__age">{`I am ${person.age}`}</p>
    : null;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {age}
      <p className="Person__partner">
        {person.isMarried
          ? `${person.partnerName} is my ${partnerSex}`
          : 'I am not married'
        }
      </p>
    </section>
  );
};
