/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './Person.scss';

export function Person({
  name,
  age,
  sex,
  partnerName,
  isMarried,
}) {
  let personPartner = '';

  if (isMarried) {
    personPartner = sex === 'm'
      ? `My wife's name is ${partnerName}`
      : `My husband's name is ${partnerName}`;
  } else {
    personPartner = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {personPartner}
      </p>
    </section>
  );
}
