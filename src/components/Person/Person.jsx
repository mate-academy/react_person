import React from 'react';
// export const Person = ({ person }) => ();
export function Person({ person }) {
  function PersonText() {
    if (person.isMarried) {
      return `${person.partnerName} is my ${person.sex === 'm' ? 'wife' : 'husband'}`;
    }

    return `Im not married`;
  }

  return (
    <>
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>
      {!!person.age && (
        <p className="Person__age">
          {`I am ${person.age}`}
        </p>
      )}
      <p className="Person__partner">
        {PersonText()}
      </p>
    </>
  );
}
