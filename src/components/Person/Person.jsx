import React from 'react';
import './Person.scss';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const hasAge = age
    ? <p className="Person__age">{`I am ${age}`}</p>
    : null;

  const personMarried = sex === 'm'
    ? `${partnerName} is my wife`
    : `${partnerName} is my husband`;

  return (
    <>
      <section className="Person">
        <h2 className="Person__name">
          {`My name is ${name}`}
        </h2>

        {hasAge}

        <p className="Person__partner">
          {isMarried ? (
            `${personMarried}`
          ) : 'I am not married'}
        </p>
      </section>
    </>
  );
};
