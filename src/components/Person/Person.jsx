import React from 'react';
/* eslint-disable react/jsx-one-expression-per-line */
// "react/jsx-one-expression-per-line": [<enabled>, { "allow": "none"|"literal"|"single-child" }];
// eslint-disable-next-line react/jsx-one-expression-per-line

export const Person = ({ person: {
  name,
  age,
  sex,
  isMarried,
  partnerName,
} }) => {
  const gender = sex;

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is {name}
      </h2>

      {age && (
        <p className="Person__age">
          I am {age}
        </p>
      )}

      {sex && isMarried ? (
        <p className="Person__partner">
          {partnerName} is my {gender === 'm' ? 'wife' : 'husband'}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};
