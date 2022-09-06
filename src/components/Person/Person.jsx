import React from 'react';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  let partner = '';

  if (!isMarried) {
    partner = 'I am not married';
  }

  if (isMarried) {
    partner = (sex === 'f')
      ? `${partnerName} is my husband`
      : `${partnerName} is my wife`;
  }

  let personAge;

  if (age) {
    personAge = `I am ${age}`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{personAge}</p>}
      <p className="Person__partner">{partner}</p>
    </section>
  );
};
