import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  let partner;

  if (sex === 'm') {
    partner = 'wife';
  } else {
    partner = 'husband';
  }

  if (age) {
    return (isMarried
      ? (
        <>
          <h2>{`My name is ${name}`}</h2>
          <p>{`I am ${age}`}</p>
          <p>{`${partnerName} is my ${partner}`}</p>
        </>
      )
      : (
        <>
          <h2>{`My name is ${name}`}</h2>
          <p>{`I am ${age}`}</p>
          <p>`I am not married`</p>
        </>
      ));
  }

  return (isMarried
    ? (
      <>
        <h2>{`My name is ${name}`}</h2>
        <p>{`${partnerName} is my ${partner}`}</p>
      </>
    )
    : (
      <>
        <h2>{`My name is ${name}`}</h2>
        <p>`I am not married`</p>
      </>
    ));
};
