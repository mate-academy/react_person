import React from 'react';
import './Person.scss';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  let partner;

  if (sex === 'f' && isMarried) {
    partner = 'husband';
  }

  if (sex === 'm' && isMarried) {
    partner = 'wife';
  }

  return (
    // eslint-disable-next-line
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      <p className="Person__age">
        {age && `I am ${age}`}
      </p>
      <p className="Person__partner">
        {
          partner
            ? `My ${partner}'s name is ${partnerName}`
            : 'I am not married'
        }
      </p>
    </section>
  );
};
