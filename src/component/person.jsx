/* eslint-disable max-len */
import React from 'react';
import './person.scss';

const Married = (isMarried, sex, partnerName) => {
  let message = '';

  if (isMarried === false) {
    message = 'I am not married';
  } else if (isMarried === true) {
    if (sex === 'f') {
      message = `My husband's name is ${partnerName}`;
    } else {
      message = `My wife's name is ${partnerName}`;
    }
  }

  return message;
};

export const Person = (person) => {
  const per = person.person;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${per.name}`}</h2>
      <p className="Person__age">{per.age ? `I am ${per.age}` : ''}</p>
      <p className="Person__partner">{Married(per.isMarried, per.sex, per.partnerName)}</p>
    </section>
  );
};
