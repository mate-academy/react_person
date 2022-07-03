import React from 'react';
import './Person.scss';

export function Person({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) {
  return (
    <>
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      <p className="Person__age">{age && (`I am ${age}`)}</p>

      <p className="Person__partner">
        {((isMarried && sex === 'm') && (`My wife's name is ${partnerName}`))
        || ((isMarried && sex === 'f') && (`My husband's name is ${partnerName}`))
        || ('I am not married')}
      </p>
    </>
  );
}
