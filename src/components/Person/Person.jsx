import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const ageStatement = age && `I am ${age}`;
  const marriageStatus = isMarried
    ? `${partnerName} is my ${sex === 'm' ? 'wife' : 'husband'}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{ageStatement}</p>}
      <p className="Person__partner">{marriageStatus}</p>
    </section>
  );
};
