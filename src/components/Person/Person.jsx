import React from 'react';

export function Person({ person }) {
  const { name, age, sex, isMarried, partnerName } = person;

  const notMarriedMessage = 'I am not married';

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
          ? `${partnerName} is my ${sex === 'm' ? 'wife' : 'husband'}`
          : notMarriedMessage}
      </p>
    </section>
  );
}
