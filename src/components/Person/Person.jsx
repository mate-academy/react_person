/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

export const Person = ({ person: {
  name,
  age,
  sex,
  isMarried,
  partnerName,
} }) => {
  const getMarriedStatus = () => {
    if (isMarried) {
      return `${partnerName} is my ${sex === 'm' ? 'wife' : 'husband'}`;
    }

    return 'I am not married';
  };

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
      <p className="Person__partner">
        {getMarriedStatus()}
      </p>
    </section>
  );
};
