/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import './Person.scss';

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => {
  const partner = isMarried
    ? `My ${sex === 'm' ? 'wife' : 'husband'}'s name is ${partnerName}`
    : 'I am not married';

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

      <p className="Person__partner">{partner}</p>
    </section>
  );
};
