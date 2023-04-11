import React from 'react';

import './Person.scss';

export function Person({ person: {
  name,
  age,
  sex,
  isMarried,
  partnerName,
} }) {
  let marriage;

  const partner = sex === 'm'
    ? 'wife'
    : 'husband';

  if (isMarried) {
    marriage = `${partnerName} is my ${partner}`;
  } else {
    marriage = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{age ? `I am ${age}` : ''}</p> }
      <p className="Person__partner">{marriage}</p>
    </section>
  );
}
