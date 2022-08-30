import React from 'react';

export function Person({ person }) {
  const { name, age, sex, isMarried, partnerName } = person;
  let partner = '';

  if (isMarried) {
    partner = sex === 'f'
      ? `My husband's name is ${partnerName}`
      : `My wife's name is ${partnerName}`;
  } else {
    partner = 'I\'m not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {!age || (
        <p className="Person__age">I am {age}</p>
      )}

      <p className="Person__partner">{partner}</p>
    </section>
  );
}
