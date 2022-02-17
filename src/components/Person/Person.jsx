/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import './Person.scss';

const Person = ({ name, age, sex, isMarried, partnerName }) => {
  const wife = `My wife's name is ${partnerName}`;
  const husband = `My husband's name is ${partnerName}`;
  const mariedStatus = (sex === 'm')
    ? wife
    : husband;

  const status = (!isMarried)
    ? 'I am not married'
    : mariedStatus;

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is {name}
      </h2>
      {age
        ? <p className="Person__age"> I am {age} </p>
        : null}
      <p className="Person__partner">{status}</p>
    </section>
  );
};

export default Person;
