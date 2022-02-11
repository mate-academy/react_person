/* eslint-disable no-unused-expressions */
import React from 'react';

import './Person.scss';

export function Person({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) {
  let spouse;

  sex === 'm'
    ? spouse = 'wife'
    : spouse = 'husband';

  let married;

  isMarried
    ? married = `My ${spouse}'s name is ${partnerName}`
    : married = 'I am not married';

  let personAge;

  age === undefined ? personAge = '' : personAge = `I am ${age}`;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      <p className="Person__age">{`${personAge}`}</p>

      <p className="Person__partner">
        {`${married}`}
      </p>
    </section>
  );
}
