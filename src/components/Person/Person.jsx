import React from 'react';

export const Person = ({ person }) => {
  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {Object.prototype.hasOwnProperty.call(person, 'age') && (
        <p className="Person__age">{`I am ${person.age}`}</p>
      )}
      <p className="Person__partner">
        {person.sex === 'f' &&
          person.isMarried &&
          `${person.partnerName} is my husband`}
        {person.sex === 'm' &&
          person.isMarried &&
          `${person.partnerName} is my wife`}
        {!person.isMarried && 'I am not married'}
      </p>
    </section>
  );
};
