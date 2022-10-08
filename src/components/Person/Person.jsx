import React from 'react';

export const Person = ({ person }) => {
  const {
    name,
    age,
    isMarried,
    sex,
    partnerName,
  } = person;

  const partnerInfo = sex === 'm'
    ? `${partnerName} is my wife`
    : `${partnerName} is my husband`;

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

      {isMarried && (
        <p className="Person__partner">
          {partnerInfo}
        </p>
      )}

      {!isMarried && (
        <p className="Person__partner">
          I am not married
        </p>
      )}
    </section>
  );
};
