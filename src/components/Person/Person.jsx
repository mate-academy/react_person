import React from 'react';
import './Person.scss';

export const Person = ({ person }) => {
  const partner = (person.sex === 'f')
    ? "husband's"
    : "wife's";

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>
      <p className="Person__age">
        {person.age ? `I am ${person.age}` : null}
      </p>
      <p className="Person__partner">
        {person.partnerName
          ? `My ${partner} name is ${person.partnerName}`
          : 'I am not married'}
      </p>
    </section>
  );
};
