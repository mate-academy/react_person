import React from 'react';

export const Person = ({
  name, age, sex, isMarried, partnerName,
}) => {
  const haveAge = age && `I am ${age}`;
  const whatsSex = sex === 'f'
    ? 'wife'
    : 'husband';

  const havePartner = isMarried
    ? `${partnerName} is my ${whatsSex}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      <p className="Person__age">
        {haveAge}
      </p>
      <p className="Person__partner">
        {havePartner}
      </p>
    </section>
  );
};
