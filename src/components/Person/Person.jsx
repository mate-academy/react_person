import React from 'react';

export const Person = ({ person }) => {
  const { name, age, isMarried, sex, partnerName } = person;

  let text = 'I am not married';

  if (isMarried === true && sex === 'm') {
    text = `${partnerName} is my wife`;
  }

  if (isMarried === true && sex === 'f') {
    text = `${partnerName} is my husband`;
  }

  const textAge = age ? <p className="Person__age">{`I am ${age}`}</p> : '';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {textAge}
      <p className="Person__partner">{text}</p>
    </section>
  );
};
