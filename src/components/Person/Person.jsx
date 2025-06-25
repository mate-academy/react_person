import React from 'react';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const nameMessage = `My name is ${name}`;
  const ageMessage = `I am ${age}`;
  const isMarriedMessage = `${partnerName} is my ${sex === 'm' ? 'wife' : 'husband'}`;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {nameMessage}
      </h2>
      {age && <p className="Person__age">{ageMessage}</p>}
      {isMarried
        ? (
          <p className="Person__partner">{isMarriedMessage}</p>
        )
        : (<p className="Person__partner">I am not married</p>)}
    </section>
  );
};
