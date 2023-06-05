import React from 'react';

export function Person({ person: { age, partnerName, sex, name } }) {
  const firstValue = 'wife';
  const secondValue = 'husband';
  const partner = sex === 'm' ? firstValue : secondValue;

  return (
    <>
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age
       && (<p className="Person__age">{`I am ${age}`}</p>)
      }
      <p className="Person__partner">
        {partnerName
          ? `${partnerName} is my ${partner}`
          : `I am not married`}
      </p>
    </>
  );
}
