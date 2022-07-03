import React from 'react';
import './Person.scss';

function Person({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) {
  const sexMessage = sex === 'm' ? `My wife's name is ${partnerName}`
    : `My husband's name is ${partnerName}`;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      <p className="Person__age">
        {age && `I am ${age}`}
      </p>

      <p className="Person__partner">
        {isMarried ? sexMessage : 'I am not married'}
      </p>
    </section>
  );
}

export default Person;
