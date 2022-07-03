/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import './Person.scss';

const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => {
  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}
      <p className="Person__partner">
        {isMarried
          ? `${sex === 'f' ? 'My husband\'s' : 'My wife\'s'} name is ${partnerName}`
          : 'I am not married'}
      </p>
    </section>
  );
};

export default Person;
