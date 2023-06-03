import React from 'react';

export function Person({ person }) {
  const firstValue = 'wife';
  const secondValue = 'husband';

  return (
    <>
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {person.age
       && (<p className="Person__age">{`I am ${person.age}`}</p>)
      }
      <p className="Person__partner">
        {person.partnerName
          ? `${person.partnerName} is my ${person.sex === 'm'
            ? firstValue
            : secondValue}`
          : `I am not married`}
      </p>
    </>
  );
}
