import React from 'react';
import './Person.scss';

export const Person = ({ person }) => {
  const {
    name,
    sex = null,
    isMarried = null,
    age = null,
    partnerName = null,
  } = person;

  const partnerType = sex === 'f'
    ? 'husband'
    : 'wife';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {
        age
          ? <p className="Person__age">{`I am ${age}`}</p>
          : null
      }
      <p className="Person__partner">
        {
          isMarried
            ? `${partnerName} is my ${partnerType}`
            : 'I am not married'
        }
      </p>
    </section>
  );
};
