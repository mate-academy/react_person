import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const renderAge = age && (
    <p className="Person__age">
      {`I am ${age}`}
    </p>
  );

  const typeOfPartner = sex === 'm' ? 'wife' : 'husband';
  const renderPartner = (
    <p className="Person__partner">
      {isMarried
        ? `${partnerName} is my ${typeOfPartner}`
        : 'I am not married'}
    </p>
  );

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      {renderAge}
      {renderPartner}
    </section>
  );
};
