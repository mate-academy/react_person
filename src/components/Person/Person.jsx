import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let partnerText;

  if (!isMarried) {
    partnerText = 'I am not married';
  } else {
    partnerText =
      sex === 'm'
        ? `${partnerName} is my wife`
        : `${partnerName} is my husband`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age !== undefined ? (
        <p className="Person__age">{`I am ${age}`}</p>
      ) : null}

      <p className="Person__partner">{partnerText}</p>
    </section>
  );
};
