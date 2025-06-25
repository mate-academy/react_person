import React from 'react';

export const Person = ({ person: {
  name,
  age,
  sex,
  isMarried,
  partnerName,
} }) => {
  const WifeOrHusband = (sex === 'm')
    ? `${partnerName} is my wife`
    : `${partnerName} is my husband`;

  const TextMaried = isMarried
    ? WifeOrHusband
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">
        { `My name is ${name}`}
      </h2>

      {(age) && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {TextMaried}
      </p>
    </section>
  );
};
