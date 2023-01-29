import React from 'react';

export const Person = ({ person: {
  name,
  age,
  sex,
  isMarried,
  partnerName,
} }) => {
  const partner = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      <p clasName="Person__age">{age === undefined ? '' : `I am ${age}`}</p>
      <p clasName="Person__partner">{isMarried ? `${partnerName} is my ${partner}` : 'I am not married'}</p>
    </section>
  );
};
