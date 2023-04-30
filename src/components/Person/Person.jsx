import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const potentialPartner = sex === 'f'
    ? `${partnerName} is my husband`
    : `${partnerName} is my wife`;

  const partner = isMarried
    ? potentialPartner
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">{partner}</p>
    </section>
  );
};
