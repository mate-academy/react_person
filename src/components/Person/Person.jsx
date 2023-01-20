import React from 'react';

export const Person = ({ info }) => {
  const { name, age, sex, isMarried, partnerName } = info;
  const partner = sex === 'f' ? 'husband' : 'wife';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      <p className="Person__age">{age && `I am ${age}`}</p>

      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${partner}`
          : 'I am not married'}
      </p>
    </section>
  );
};
