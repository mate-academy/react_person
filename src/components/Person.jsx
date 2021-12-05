import React from 'react';
import './Person.scss';

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
      {age && `I am ${age}`}
    </p>

    <p className="Person__partner">
      {isMarried && (sex === 'm'
        ? `My wife's name is ${partnerName}`
        : `My husband's name is ${partnerName}`
      )}

      {!isMarried && 'I am not married'}
    </p>
  </section>
);
