import React from 'react';

export const Person = ({ person }) => {
  const { name, age = null, sex, partnerName, isMarried } = person;
  const nameText = `My name is ${name}`;
  const ageText = age ? `I am ${age}` : '';
  let partnerText = sex === 'm'
    ? `${partnerName} is my wife`
    : `${partnerName} is my husband`;

  if (isMarried === false) {
    partnerText = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{nameText}</h2>
      {age && <p className="Person__age">{ageText}</p>}
      <p className="Person__partner">{partnerText}</p>
    </section>
  );
};
