import React from 'react';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const isAge = age
    ? `I am ${age}`
    : ('');

  const partner = sex === 'm' ? 'wife' : 'husband';
  const marriageStatus = isMarried
    ? `${partnerName} is my ${partner}`
    : `I am not married`;

  return (
    <section className="Person">
      <h2 className="Person__name">
        { `My name is ${name}` }
      </h2>
      {age && <p className="Person__age">{isAge}</p>}
      <p className="Person__partner">
        { marriageStatus }
      </p>
    </section>
  );
};
