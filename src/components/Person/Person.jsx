import React from 'react';

export const Person = ({ person }) => {
  const {
    name,
    age = null,
    sex,
    isMarried,
    partnerName,
  } = person;

  const ageInfo = age !== null
    ? <p className="Person__age">{`I am ${age}`}</p>
    : null;

  const partnerPerson = sex === 'f'
    ? 'husband'
    : 'wife';

  const marriage = isMarried
    ? <p className="Person__partner">{`${partnerName} is my ${partnerPerson}`}</p>
    : <p className="Person__partner">I am not married</p>;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {ageInfo}
      {marriage}
    </section>
  );
};
