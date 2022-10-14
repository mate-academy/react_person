// export const Person = ({ person }) => ();
import React from 'react';
import './Person.scss';

export function Person({
  person: {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  },
}) {
  const spouseText = sex === 'm'
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

      <p className="Person__partner">
        {isMarried
          ? spouseText
          : 'I am not married'
        }
      </p>
    </section>
  );
}
