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
  const nameOfPartner = `My ${sex === 'm' ? 'wife`s' : 'husband`s'} name is ${partnerName}`;

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
          ? nameOfPartner
          : 'I am not married'}
      </p>
    </section>
  );
};
