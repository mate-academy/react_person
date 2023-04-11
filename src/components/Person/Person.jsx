import React from 'react';

export function Person({ person: {
  name,
  age,
  sex,
  isMarried,
  partnerName,
} }) {
  let marriage;

  if (isMarried) {
    marriage = sex === 'm'
      ? `${partnerName} is my wife`
      : `${partnerName} is my husband`;
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
