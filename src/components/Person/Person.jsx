import React from 'react';

export function Person({ person }) {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const maried = sex === 'm'
    ? 'wife'
    : 'husband';

  const isPartner = isMarried
    ? `${partnerName} is my ${maried}`
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
        {isPartner}
      </p>
    </section>
  );
}
