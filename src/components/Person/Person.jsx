/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './Person.scss';

export function Person({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) {
  const partner = (sex === 'm')
    ? (`My wife's name is ${partnerName}`)
    : (`My husband's name is ${partnerName}`);

  return (
    <div className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age ? (<p className="Person__age">{`I am ${age}`}</p>) : null}
      {isMarried
        ? (<p className="Person__partner">{partner}</p>)
        : <p className="Person__partner">I am not married</p>}
    </div>
  );
}
