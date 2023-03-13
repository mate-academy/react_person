import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const ageInformation = age
    ? `I am ${age}`
    : null;
  const husbandOrWife = sex === 'm'
    ? 'wife'
    : 'husband';
  const marriedOrSingle = isMarried
    ? `${partnerName} is my ${husbandOrWife}`
    : `I am not married`;

  return (
    <>
      <section className="Person">
        <h2 className="Person__name">{`My name is ${name}`}</h2>
        <p className="Person__age">{ageInformation}</p>
        <p className="Person__partner">{marriedOrSingle}</p>
      </section>
    </>
  );
};
