import React from 'react';

export function Person({ person }) {
  const { name, age = null, sex, isMarried, partnerName } = person;
  const married = sex === 'f' ? 'husband' : 'wife';
  const marriedText = `${partnerName} is my ${married}`;

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
        {isMarried ? marriedText : 'I am not married'}
      </p>
    </section>
  );
}
