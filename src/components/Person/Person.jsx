import React from 'react';

export function Person({ person }) {
  return (
    <>
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {person.age ? (
        <p className="Person__age">{`I am ${person.age}`}</p>
      ) : null}
      <p className="Person__partner">{person.partnerName ? `${person.partnerName} is my ${person.sex === 'm' ? 'wife' : 'husband'}` : `I am not married`}</p>
    </>
  );
}
