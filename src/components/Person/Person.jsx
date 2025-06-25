import React from 'react';
import './person.scss';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const genderPartner = sex === 'm'
    ? 'wife'
    : 'husband';

  const isMarriedDescription = isMarried
    ? `${partnerName} is my ${genderPartner}`
    : `I am not married`;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && (
        <p className="Person__age">{`I am ${age}`}</p>
      )}

      <p className="Person__partner">
        {isMarriedDescription}
      </p>
    </section>
  );
};
