import React from 'react';

export const Person = ({ person }) => {
  const {
    name,
    sex,
    isMarried,
    age,
    partnerName,
  } = person;

  const husbandOrWife = isMarried
    ? `${partnerName} is my ${sex === 'm'
      ? 'wife' : 'husband'}` : 'I am not married';
  const ageBlock = age ? <p className="Person__age">{`I am ${age}`}</p> : '';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {ageBlock}
      <p className="Person__partner">{husbandOrWife}</p>
    </section>
  );
};
