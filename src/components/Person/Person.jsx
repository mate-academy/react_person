/* eslint-disable indent */
/* eslint-disable prettier/prettier */
/* eslint-disable no-nested-ternary */
import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, partnerName, isMarried } = person;

  const partner = isMarried && sex === 'm'
    ? `${partnerName} is my wife`
    : isMarried && sex === 'f'
      ? `${partnerName} is my husband`
      : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{partner}</p>
    </section>
  );
};
