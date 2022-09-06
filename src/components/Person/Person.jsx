import React from 'react';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const personAge = `I am ${age}`;

  let partner = (sex === 'f')
    ? `${partnerName} is my husband`
    : `${partnerName} is my wife`;

  if (!isMarried) {
    partner = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{personAge}</p>}
      <p className="Person__partner">{partner}</p>
    </section>
  );
};
