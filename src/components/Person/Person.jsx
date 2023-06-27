import React from 'react';
import './Person.scss';

export const Person = ({ person }) => {
  const partner = person.sex === 'm'
    ? 'wife'
    : 'husband';

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

      {person.isMarried ? (
        <p className="Person__partner">
          {`${person.partnerName} is my ${partner}`}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};
