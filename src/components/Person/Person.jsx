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
  const partnersName = sex === 'm'
    ? `${partnerName} is my wife`
    : `${partnerName} is my husband`;
  const hasPartner = isMarried === true
    ? partnersName
    : `I am not married`;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {hasPartner}
      </p>
    </section>
  );
};
