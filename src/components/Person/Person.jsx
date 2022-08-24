import React from 'react';
import '../../App.scss';

export function Person({ person }) {
  const { name, age, isMarried, sex, partnerName } = person;
  let partner;

  if (isMarried) {
    partner = sex === 'm' ? 'wife\'s' : 'husband\'s';
    partner = `My ${partner} name is ${partnerName}`;
  } else {
    partner = 'I am not married';
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
