import React from 'react';

export function Person({ name, age, sex, isMarried, partnerName }) {
  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      {isMarried ? (
        <p className="Person__partner">
          {sex === 'm'
            ? `My wife's name is ${partnerName}`
            : `My husband's name is ${partnerName}`}
        </p>
      ) : (
        'I am not married'
      )}
    </section>
  );
}
