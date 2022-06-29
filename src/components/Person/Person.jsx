import React from 'react';
import './Person.scss';

function Person({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) {
  let partnerInfo = 'I am not married';

  if (isMarried) {
    partnerInfo = sex === 'm'
      ? `My wife's name is ${partnerName}`
      : `My husband's name is ${partnerName}`;
  }

  return (
    <div className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      <p className="Person__age">
        {age ? `I am ${age}` : null}
      </p>

      <p className="Person__partner">
        {partnerInfo}
      </p>
    </div>
  );
}

export default Person;
