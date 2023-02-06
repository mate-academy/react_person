import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const partner = sex === 'm' ? 'wife' : 'husband';
  const personPartnerParagraph = (
    <p className="Person__partner">
      {isMarried ? `${partnerName} is my ${partner}` : 'I am not married'}
    </p>
  );

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      {personPartnerParagraph}
    </section>
  );
};
