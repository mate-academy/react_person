/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import './Person.scss';

const Person = ({ name, age, sex, isMarried, partnerName }) => {
  const wife = `My wife's name is ${partnerName}`;
  const husbant = `My husband's name is ${partnerName}`;
  const mariedStatus = (sex === 'm')
    ? wife
    : husbant;

  const status = (!isMarried)
    ? 'I am not married'
    : mariedStatus;
  const abbelingAge = !age || false;

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is {name}
      </h2>
      <p className="Person__age" hidden={abbelingAge}> I am {age} </p>
      <p className="Person__partner">{status}</p>
    </section>
  );
};

export default Person;
