// Write code here
import React from 'react';
import './Person.scss';

const partnerSex = sex => (
  sex === 'm'
    ? 'wife'
    : 'husband'
);

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${name}`}
    </h2>
    <p className="Person__age">
      {`I am ${age}`}
    </p>
    <p className="Person__partner">
      {isMarried
        ? `My ${partnerSex(sex)}'s name is ${partnerName}`
        : 'I am no t married'}
    </p>
  </section>
);
