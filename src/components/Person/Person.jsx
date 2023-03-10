import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  let partnerFieldText = `I am not married`;

  if (isMarried && partnerName) {
    partnerFieldText = sex === 'm'
      ? `${partnerName} is my wife`
      : `${partnerName} is my husband`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      <p className="Person__age">
        {
          age
            ? `I am ${age}`
            : null
        }
      </p>
      <p className="Person__partner">{partnerFieldText}</p>
    </section>
  );
};
