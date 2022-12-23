import React from 'react';

export const Person = ({ person }) => {
  const sex = person.sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>
      <p className="Person__age">
        {person.age ? `I am ${person.age}` : null}
      </p>
      <p className="Person__partner">
        {person.isMarried
          ? `${person.partnerName} is my ${sex}`
          : 'I am not married'
        }
      </p>
    </section>
  );
};
