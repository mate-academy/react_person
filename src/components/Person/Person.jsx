import React from 'react';

export const Person = ({ person }) => {
  const { name,
    sex,
    age,
    isMarried,
    partnerName } = person;

  const checkAge = age
    ? <p className="Person__age">{`I am ${age}`}</p>
    : '';

  const sexPartner = sex === 'f' ? 'husband' : 'wife';

  const isMarriedCheck = isMarried
    ? `${partnerName} is my ${sexPartner}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {checkAge}
      <p className="Person__partner">{isMarriedCheck}</p>
    </section>
  );
};
