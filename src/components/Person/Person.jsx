/* eslint-disable no-nested-ternary */
import React from 'react';

export const Person = ({ person }) => {
  const {
    name,
    age,
    isMarried,
    partnerName,
    sex,
  } = person;

  let partner = '';

  if (isMarried) {
    if (sex === 'f') {
      partner = (`My husband is ${partnerName}`);
    } else {
      partner = (`My wife is ${partnerName}`);
    }
  } else {
    partner = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && (<p className="Person__age">{`I am ${age}`}</p>)}
      <p className="Person__partner">
        {partner}
      </p>
    </section>
  );
};
