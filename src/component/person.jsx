/* eslint-disable max-len */
import React from 'react';

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

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => {
  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      <p className="Person__age">{age ? `I am ${age}` : ''}</p>
      <p className="Person__partner">{Married(isMarried, sex, partnerName)}</p>
    </section>
  );
};
