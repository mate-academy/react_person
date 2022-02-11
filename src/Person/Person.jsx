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

  if (sex === 'm') {
    spouse = 'wife';
  } else if (sex === 'f') {
    spouse = 'husband';
  }

  let married;

  if (isMarried === true) {
    married = `My ${spouse}'s name is ${partnerName}`;
  } else if (isMarried === false) {
    married = 'I am not married';
  }

  let personAge;

  if (age === undefined) {
    personAge = 'Age is hidden';
  } else if (age) {
    personAge = `I am ${age}`;
  }

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
