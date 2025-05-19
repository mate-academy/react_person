import React from 'react';
import './Person.scss';

export const Person = ({ person }) => {
  const {
    name,
    age,
    isMarried,
    sex,
    partnerName,
  } = person;

  const userPartner = sex === 'f'
    ? 'husband'
    : 'wife';

  const userMarried = isMarried
    ? `${partnerName} is my ${userPartner}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age && (
        <p className="Person__age">{`I am ${age}`}</p>
      )}

      <p className="Person__partner">{userMarried}</p>
    </section>
  );
};
