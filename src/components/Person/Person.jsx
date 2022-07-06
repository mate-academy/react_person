import React from 'react';
import './Person.scss';

function Person({ person }) {
  let partnerInfo = 'I am not married';

  if (person.isMarried) {
    partnerInfo = person.sex === 'm'
      ? `My wife's name is ${person.partnerName}`
      : `My husband's name is ${person.partnerName}`;
  }

  return (
    <div className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>

      <p className="Person__age">
        {person.age ? `I am ${person.age}` : null}
      </p>

      <p className="Person__partner">
        {partnerInfo}
      </p>
    </div>
  );
}

export default Person;
