import React from 'react';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;
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

      {age > 0 && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {havePartner}
      </p>
    </section>
  );
};
