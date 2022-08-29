import React from 'react';

export function Person({ person }) {
  const { name, age, sex, partnerName, isMarried } = person;

  const partner = sex === 'm'
    ? `wife's`
    : `husband's`;

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
          ? `My ${partner} name is ${partnerName}`
          : `I am not married`
        }
      </p>
    </section>
  );
}
