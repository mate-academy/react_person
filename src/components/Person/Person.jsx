import React from 'react';

export const Person = ({ person }) => {
  const {
    name,
    age = null,
    sex,
    isMarried,
    partnerName,
  } = person;

  const ageInfo = age !== null && age !== undefined
    ? `I am ${age}`
    : null;

  const partnerPerson = sex === 'f'
    ? 'husband'
    : 'wife';

  const marriage = isMarried
    ? `${partnerName} is my ${partnerPerson}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      <p className="Person__age">{ageInfo}</p>
      <p className="Person__partner">{marriage}</p>
    </section>
  );
};
