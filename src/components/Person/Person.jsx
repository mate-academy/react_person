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
  let partnerSex = 'I am not married';

  if (isMarried) {
    partnerSex = sex === 'm'
      ? `My wife's name is ${partnerName}`
      : `My husband's name is ${partnerName}`;
  }

  return (
    <>
      <div className="Person">
        <h2 className="Person__name">
          {`My name is ${name}`}
        </h2>

        {age && <p className="Person__age">{`I am ${age}`}</p>}

        <p className="Person__partner">
          {partnerSex}
        </p>
      </div>
    </>
  );
}
