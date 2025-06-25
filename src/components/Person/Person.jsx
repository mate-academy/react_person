import React from 'react';
import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const personAge = age ? `I am ${age}` : null;

  const relationshipStatus = isMarried
    ? `${partnerName} is my ${sex === 'm' ? 'wife' : 'husband'}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {personAge && <p className="Person__age">{personAge}</p>}
      <p className="Person__partner">{relationshipStatus}</p>
    </section>
  );
};
