import React from 'react';
// export const Person = ({ person }) => ();
export function Person({ person }) {
  let marriedText;

  if (person.sex === 'm' && person.isMarried) {
    marriedText = `${person.partnerName} is my wife`;
  }

  if (person.isMarried === false) {
    marriedText = `Im not married`;
  }

  if (person.sex === 'f' && person.isMarried) {
    marriedText = `${person.partnerName} is my husband`;
  }

  return (
    <>
      <h2 className="Person__name">
        {`My name is `}
        {person.name}
      </h2>
      {person.age ? (
        <p className="Person__age">
          I am
          {' '}
          {person.age}
        </p>
      ) : ''}
      <p className="Person__partner">
        {marriedText}
      </p>
    </>
  );
}
