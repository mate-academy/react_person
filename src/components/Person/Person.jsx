/* eslint-disable react/jsx-filename-extension */
// Write code here
import React from 'react';
import './Person.scss';

const Person = ({
  name, age, sex, isMarried, partnerName,
}) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${name}`}
    </h2>

    {age && <p className="Person__age">{`I am ${age}`}</p>}

    <p className="Person__partner">
      {isMarried
        ? `My ${sex === 'f' ? 'husband' : 'wife'}'s name is ${partnerName}`
        : 'I am not married'}
    </p>
  </section>
);

export default Person;
