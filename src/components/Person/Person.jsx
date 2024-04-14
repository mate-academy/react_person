import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried } = person;
  let partnerStatus;

  if (isMarried) {
    partnerStatus = sex === 'm' ? 'Natasha is my wife' : 'Maksym is my husband';
  } else {
    partnerStatus = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">{partnerStatus}</p>
    </section>
  );
};
