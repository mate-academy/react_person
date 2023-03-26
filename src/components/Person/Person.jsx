/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
// "react/jsx-one-expression-per-line": [<enabled>, { "allow": "none"|"literal"|"single-child" }];
// eslint-disable-next-line react/jsx-one-expression-per-line

export const Person = ({ person: {
  name, age, sex, isMarried, partnerName,
} }) => (
  <section className="Person">
    <h2 className="Person__name">
      My name is {name}
    </h2>

    {age ? (
      <p className="Person__age">
        I am {age}
      </p>
    ) : null}

    {sex === 'm' && isMarried ? (
      <p className="Person__partner">
        {partnerName} is my wife
      </p>
    ) : (
      <p className="Person__partner">I am not married</p>
    )}

    {sex === 'f' && isMarried ? (
      <p className="Person__partner">
        {partnerName} is my husband
      </p>
    ) : (
      <p className="Person__partner">I am not married</p>
    )}
  </section>
);
