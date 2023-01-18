import React from 'react';

export const Person = ({ person }) => {
  const iff = (condition, then, otherwise) => (
    condition ? then : otherwise
  );

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is
        {' '}
        {person.name}
      </h2>
      {person.age && (
        <p className="Person__age">
          I am
          {' '}
          {person.age}
        </p>
      )}
      <p className="Person__partner">
        {person.isMarried ? (
          iff(person.sex === 'm',
            `${person.partnerName} is my wife`,
            `${person.partnerName} is my husband`)
        ) : `I am not married`}
      </p>
    </section>
  );
}
