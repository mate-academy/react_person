import React from 'react';

export const Person = ({ person }) => {
  const { name, age, isMarried, partnerName, sex } = person;
  let married;

  if (isMarried) {
    married = sex === 'm'
      ? `${partnerName} is my wife`
      : `${partnerName} is my husband`;
  } else {
    married = `I am not married`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">
        {married}
      </p>
    </section>
  );
};
