import React from 'react';

export const Person = ({ person: {
  name,
  age,
  sex,
  isMarried,
  partnerName,
} }) => {
  const partnerText = sex === 'm'
    ? `${partnerName} is my wife`
    : `${partnerName} is my husband`;

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is&nbsp;
        {name}
      </h2>
      <p className="Person__age">
        {age && (`I am ${age}`)}
      </p>
      <p className="Person__partner">
        {isMarried ? (partnerText) : ('I am not married')}
      </p>
    </section>
  );
};
