import React from 'react';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const personName = `My name is ${name}`;

  const partner = sex === 'm'
    ? 'wife'
    : 'husband';

  const marriage = isMarried
    ? `${partnerName} is my ${partner}`
    : 'I am not married';

  const ageIsIndicated = age
    ? `I am ${age}`
    : null;

  const ageContent = age && <p className="Person__age">{ageIsIndicated}</p>;

  return (
    <section className="Person">
      <h2 className="Person__name">{personName}</h2>
      {ageContent}
      <p className="Person__partner">{marriage}</p>
    </section>
  );
};
