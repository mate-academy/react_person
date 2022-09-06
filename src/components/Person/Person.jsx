import React from 'react';

export const Person = ({ person: {
  name,
  age,
  sex,
  isMarried,
  partnerName,
} }) => {
  const gender = sex === 'm'
    ? `${partnerName} is my wife`
    : `${partnerName} is my husband`;

  const married = isMarried === false
    ? 'I am not married'
    : gender;

  return (
    <>
      <section className="Person">
        <h2 className="Person__name">{`My name is ${name}`}</h2>
        {age && (
          <p className="Person__age">{`I am ${age}`}</p>
        )}
        <p className="Person__partner">{married}</p>
      </section>
    </>
  );
};
