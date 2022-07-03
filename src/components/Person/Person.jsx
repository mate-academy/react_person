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
    <>
      <h2>{`My name is ${name}`}</h2>
      {age ? (<p>{`I am ${age}`}</p>) : null}
      {isMarried ? (<p>{partner}</p>) : <p>I am not married</p>}
    </>
  );
}
