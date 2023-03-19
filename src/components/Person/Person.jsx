import React from 'react';

import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, sex, partnerName, isMarried } = person;

  const partnerSex = (personSex) => {
    if (personSex === 'm') {
      return 'wife';
    }

    return 'husband';
  };

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">
        {isMarried === true ? `${partnerName} is my ${partnerSex(sex)}` : 'I am not married'}
      </p>
    </section>
  );
};
