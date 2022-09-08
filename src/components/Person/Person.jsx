import React from 'react';

export const Person = ({ person }) => {
  const personSex = person.sex === 'm' ? `${person.partnerName} is my wife` : `${person.partnerName} is my husband`;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {person.age && (
        <p className="Person__age">{`I am ${person.age}`}</p>
      )}

      {person.isMarried ? (
        <p className="Person__partner">
          {personSex}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};
