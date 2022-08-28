import React from 'react';

export const Person = ({ person: {
  name,
  age,
  sex,
  isMarried,
  partnerName,
} }) => {
  const partner = sex === 'm' ? `My wife's name is ${partnerName}`
    : `My husband's name is ${partnerName}`;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      {age && (
        <p className="Person__age">
          {age && `I am ${age}`}
        </p>
      )}
      <p className="Person__partner">{isMarried && partner}</p>
      <p className="Person__partner">{!isMarried && `I am not married`}</p>
    </section>
  );
};
