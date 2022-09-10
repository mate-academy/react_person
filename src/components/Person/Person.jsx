import React from 'react';

export const Person = ({ name, age = null, sex, isMarried, partnerName }) => (
  <section className="Person">

    <h2 className="Person__name">{`My name is ${name}`}</h2>
    {age ? (<p className="Person__age">{`I am ${age}`}</p>) : (null)}
    {isMarried ? (
      <p className="Person__partner">
        {
        sex === 'm' ? (
          `My wife is ${partnerName}`
        ) : (
          `My husband is ${partnerName}`
        )
      }
      </p>
    ) : (
      <p className="Person__partner">I am not married</p>
    )}
  </section>
);
