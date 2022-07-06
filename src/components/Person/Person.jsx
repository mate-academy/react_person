// Write code here
import React from 'react';
import './Person.scss';

export function Person({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) {
  const partnerType = (sex === 'm') ? 'wife' : 'husband';

  return (
    <>
      <div className="Person">
        <h2 className="Person__name">
          {`My name is ${name}`}
        </h2>

        {age && (
          <p className="Person__age">
            {`I am ${age}`}
          </p>
        )}

        <p className="Person__partner">
          {(isMarried)
            ? (`My ${partnerType}'s name is ${partnerName}`)
            : ('I am not married')}
        </p>
      </div>
    </>
  );
}
