import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const whoIsPartner = sex === 'm'
    ? `${partnerName} is my wife`
    : `${partnerName} is my husband`;

  const isHasPartner = isMarried && whoIsPartner;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && (
        <p className="Person__age">
          {(`I am ${age}`)}
        </p>
      )}
      <p className="Person__partner">
        {isHasPartner || 'I am not married'}
      </p>
    </section>
  );
};
