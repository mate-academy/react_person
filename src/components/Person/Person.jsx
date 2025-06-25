import React from 'react';
import './Person.scss';

export const Person = ({
  person,
}) => {
  const sposes = person.sex === 'm'
    ? 'wife'
    : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>
      {person.age && (
        <p className="Person__age">{`I am ${person.age}`}</p>
      )}
      <p className="Person__partner">
        {!person.isMarried
          ? `I am not married`
          : `${person.partnerName} is my ${sposes}`
      }
      </p>
    </section>
  );
};
