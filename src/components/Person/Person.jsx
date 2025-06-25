import React from 'react';
import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const MALE = 'm';
  const peartnerRole = sex === MALE ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">{name ? `My name is ${name}` : ''}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${peartnerRole}`
          : 'I am not married'}
      </p>
    </section>
  );
};
