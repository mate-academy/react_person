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

      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {isMarried
          ? (`My
            ${sex === 'm'
              ? 'wife'
              : 'husband'
            }'s name is ${partnerName}`)
          : ('I am not married')}
      </p>
    </>
  );
}
