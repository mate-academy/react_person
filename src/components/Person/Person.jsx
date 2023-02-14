import React from 'react';

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => {
  let partnerMessage = '';

  if (sex === 'm' && isMarried === true) {
    partnerMessage = `${partnerName} is my wife`;
  } else if (sex === 'f' && isMarried === true) {
    partnerMessage = `${partnerName} is my husband`;
  } else {
    partnerMessage = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      <p className="Person__age">{age ? `I am ${age}` : ''}</p>
      <p className="Person__partner">{partnerMessage}</p>
    </section>
  );
};
