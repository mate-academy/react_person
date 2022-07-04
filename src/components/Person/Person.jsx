/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import './Person.scss';

export const Person = ({
  name, age, sex, isMarried, partnerName,
}) => {
  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is {name}
      </h2>
      {age && (
        <p className="Person__age">I am {age}</p>
      )}
      <p className="Person__partner">
        {isMarried && sex === 'm' ? `My wife's name is ${partnerName}`
          : isMarried && sex === 'f' ? `My husband's name is ${partnerName}`
            : 'I am not married'}
      </p>
    </section>
  );
};
