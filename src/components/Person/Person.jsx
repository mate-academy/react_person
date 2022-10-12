import React from 'react';

export function Person({ name, age, partnerName, sex }) {
  const partnerIs = sex === 'm'
    ? `${partnerName} is my wife`
    : `${partnerName} is my husband`;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && <p className="Person__age">{`I am ${age}`}</p>}

      <p className="Person__partner">
        {partnerName ? partnerIs : 'I am not married'}
      </p>
    </section>
  );
}
