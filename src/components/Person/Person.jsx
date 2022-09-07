import React from 'react';

export const Person = ({
  person: {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  },
}) => {
  let personPartner = (sex === 'm')
    ? `${partnerName} is my wife`
    : `${partnerName} is my husband`;

  if (!isMarried) {
    personPartner = 'Im not married';
  }

  const personAge = `I am ${age}`;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{personAge}</p>}
      <p className="Person__partner">{personPartner}</p>
    </section>
  );
};
