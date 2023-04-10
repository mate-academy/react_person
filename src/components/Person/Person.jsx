import { bool, number, string } from 'prop-types';
import React from 'react';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const isGender = sex === 'f'
    ? 'husband'
    : 'wife';

  const isAge = age
    ? <p className="Person__age">{`I am ${age}`}</p>
    : null;

  const isPartner = isMarried
    ? `${partnerName} is my ${isGender}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      {isAge}
      <p className="Person__partner">
        {isPartner}
      </p>
    </section>
  );
};

Person.defaultProps = {
  name: string,
  age: number,
  sex: string,
  isMarried: bool,
  partnerName: string,
};
